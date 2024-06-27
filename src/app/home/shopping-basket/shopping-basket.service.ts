import {Injectable} from '@angular/core';

import {Article} from "./article.model";
import {BehaviorSubject, forkJoin, Observable, of} from "rxjs";
import {map, flatMap, tap, catchError} from "rxjs/operators"
import {ShoppingCart} from "./shopping-cart";
import {EndPoints} from "@shared/end-points";
import {HttpService} from "@core/http.service";
import {AuthService} from "@core/auth.service";
import {Shopping} from "../../shop/cashier-opened/shopping-cart/shopping.model";

@Injectable({
  providedIn: 'root',
})
export class ShoppingBasketService {
  private amountSubject:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private shoppingCart: ShoppingCart;
  private articleImages: string[] = [
    'https://img.ruten.com.tw/s2/0/07/d8/22027800358872_988.jpg',
    'https://obs.line-scdn.net/0hs74TRyDsLBgJLQQniPhTTzB7IGk6STkeZ1VnfS0vdCghSndINklrYikrd304TWtLNFdmLXh6dCknHG0ZYEs',
    'https://pica.zhimg.com/v2-be29cd1802beb942b57eaa9f92865db0_720w.jpg?source=172ae18b',
    'https://img.alicdn.com/bao/uploaded/i3/1716763143/O1CN01vClZei1Z5XNACttFJ_!!1716763143.jpg_500x500q90.jpg',
    'https://cs-c.ecimg.tw/items/DICK8YA900AIZDI/000002_1644290607.jpg'
  ];
  private articleImageMap: Map<string, string>;

  constructor(private httpService: HttpService, private authService: AuthService) {
    this.articleImageMap = new Map<string, string>();
  }

  addArticle(article: Article): void {
    console.log('Article added to shopping basket: ' + article.description);
  }

  getShoppingCartItems() {
    return this.getShoppingCart().pipe(
      flatMap((shoppingCart) => {
        if (shoppingCart) {
          const requests = [];
          shoppingCart.shoppingItems.forEach((shopping) => {
            requests.push(this.httpService.get(EndPoints.ARTICLES + "/" + shopping.barcode).pipe(
              map((article: Article) => {
                let image = null;
                if (this.articleImageMap.has(article.barcode)) {
                  image = this.articleImageMap.get(article.barcode);
                } else {
                  image = this.loadArticleImage();
                  this.articleImageMap.set(article.barcode, image);
                }
                return {...article, ...shopping, image}
              })
            ))
          });
          return requests.length ? forkJoin(requests) : of([]);
        }
        return shoppingCart;
      })
    )
  }

  loadArticleImage(): string{
    let index = Math.floor(Math.random() * (this.articleImages.length - 1));
    return this.articleImages[index];
  }

  getShoppingCart(): Observable<any> {
    if (this.authService.isAuthenticated()) {
      return this.httpService.get(EndPoints.SHOPPING_CART + "/" + this.authService.getMobile()).pipe(
        tap((res: ShoppingCart) => {
          this.amountSubject.next(res.shoppingItems.length)
          this.shoppingCart = res;
        }),
        catchError(err => {
          return of(null);
        })
      )
    } else {
      return of(null);
    }
  }

  deleteFromShoppingBasket(barcode: string): Observable<any>  {
    let items: Shopping[] = [];
    for (let shoppingItem of this.shoppingCart.shoppingItems) {
      if (shoppingItem.barcode != barcode) {
        items.push(shoppingItem)
      }
    }
    this.shoppingCart.shoppingItems = items;
    return this.httpService.post(EndPoints.SHOPPING_CART + "/", this.shoppingCart)
  }

  addIntoShoppingBasket(article: Article, amount: number):  Observable<any> {
    const shopping = new Shopping(article.barcode, article.description, article.retailPrice);
    shopping.amount = amount;
    let items = this.shoppingCart.shoppingItems;
    items.push(shopping);
    this.shoppingCart.shoppingItems = items;
    return this.httpService.post(EndPoints.SHOPPING_CART + "/", this.shoppingCart)
  }

  updateShoppingBasketAmount(barcode: string, increase: number): Observable<any> {
    let items: Shopping[] = [];
    for (let shoppingItem of this.shoppingCart.shoppingItems) {
      if (shoppingItem.barcode == barcode) {
        shoppingItem.amount += increase
      }
      if (shoppingItem.amount != 0) {
        items.push(shoppingItem)
      }
    }
    this.shoppingCart.shoppingItems = items;
    return this.httpService.post(EndPoints.SHOPPING_CART + "/", this.shoppingCart)
  }

  getAmountObserver() {
    return this.amountSubject.asObservable();
  }
}
