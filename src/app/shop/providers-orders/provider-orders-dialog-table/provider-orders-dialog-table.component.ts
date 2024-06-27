import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedArticleService} from "../../shared/services/shared.article.service";
import {HttpService} from "@core/http.service";
import {EMPTY, iif, merge, Observable, of} from "rxjs";
import {Shopping} from "../../cashier-opened/shopping-cart/shopping.model";
import {catchError, concatMap, map} from "rxjs/operators";
import {ArticleQuickCreationDialogComponent} from "../../cashier-opened/shopping-cart/article-quick-creation-dialog.component";
import {ShoppingState} from "../../cashier-opened/shopping-cart/shopping-state.model";
import {TicketCreation} from "../../cashier-opened/shopping-cart/ticket-creation.model";
import {EndPoints} from "@shared/end-points";
import {ShoppingCartService} from "../../cashier-opened/shopping-cart/shopping-cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NumberDialogComponent} from "@shared/dialogs/number-dialog.component";
import {CheckOutDialogComponent} from "../../cashier-opened/shopping-cart/check-out-dialog.component";
import {SelectBudgetDialogComponent} from "../../cashier-opened/shopping-cart/select-budget-dialog.component";
import {CustomerDiscountDialogComponent} from "../../cashier-opened/shopping-cart/customer-discount-dialog.component";
import {ArticlesFamilyDialogComponent} from "../../cashier-opened/shopping-cart/articles-family/articles-family-dialog.component";
import {Article} from "../../../home/shared/article.model";
export interface PeriodicElement {
  barcode: string;
  description: string;
  position: number;
  requiredAmount: number;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, barcode: '7866767867867', requiredAmount: 0, description: 'Camisa SportCliff', actions: 'H'},
  {position: 2, barcode: '1231231311233', requiredAmount: 0, description: 'Short Deportivo', actions: 'He'},
];

@Component({
  selector: 'app-provider-orders-dialog-table',
  templateUrl: './provider-orders-dialog-table.component.html',
  styleUrls: ['./provider-orders-dialog-table.component.css']
})
export class ProviderOrdersDialogTableComponent {
  static SHOPPING_CART_NUM = 4;

  displayedColumns: string[] = ['position', 'barcode', 'description', 'requiredAmount', 'actions'];
  dataSource = ELEMENT_DATA;

  barcode: string;
  barcodes: Observable<number[]> = of([]);

  // displayedColumns = ['id', 'barcode', 'description',  'amount', 'actions'];
  articles: Article[] = [];
  indexShoppingCart = 0;
  totalShoppingCart = 0;
  item = 0;
  // private shoppingCartList: Array<Array<Shopping>> = [];
  @ViewChild('code', {static: true}) private elementRef: ElementRef;

  constructor(private dialog: MatDialog, private shoppingCartService: ShoppingCartService, private _snackBar: MatSnackBar) {
    for (let i = 0; i < 3; i++) {
      // this.shoppingCartList.push([]);
    }
    this.articles = [];
  }

  ngOnInit(): void {
    // this.elementRef.nativeElement.focus();
    this.articles = [];
    this.synchronizeShoppingCart();
  }

  synchronizeShoppingCart(): void {
    this.articles = [...this.articles];
    let total = 0;
    // for (const articles of this.articles) {
    //   total = total + articles.total;
    // }
    // this.totalShoppingCart = Math.round(total * 100) / 100;
  }

  addBarcode(barcode): void {
    this.shoppingCartService
      .read(barcode)
      .subscribe(newShopping => {
        this.articles.push(newShopping);
        this.synchronizeShoppingCart();
      });
    this.elementRef.nativeElement.focus();
  }

  incrementAmount(periodic: PeriodicElement): void {
    periodic.requiredAmount++;
    if (periodic.requiredAmount === 0) {
      periodic.requiredAmount++;
    }
    // periodic.updateTotal();
    // this.synchronizeShoppingCart();
  }

  decreaseAmount(periodic: PeriodicElement): any {
    if (periodic.requiredAmount > 0) {
      periodic.requiredAmount--;
      // periodic.state = ShoppingState.COMMITTED;
    }
    // shopping.updateTotal();
    // this.synchronizeShoppingCart();
  }

  updateDiscount(shopping: Shopping): void {
    this.dialog.open(NumberDialogComponent, {data: shopping.discount})
      .afterClosed()
      .subscribe(result => {
        if (result) {
          shopping.discount = result;
          if (shopping.discount < 0) {
            shopping.discount = 0;
          }
          if (shopping.discount > 100) {
            shopping.discount = 100;
          }
          shopping.updateTotal();
          this.synchronizeShoppingCart();
        }
      });
  }

  updateTotal(shopping: Shopping): void {
    this.dialog.open(NumberDialogComponent, {data: shopping.total})
      .afterClosed()
      .subscribe(result => {
        if (result) {
          shopping.total = result;
          if (shopping.total > (shopping.retailPrice * shopping.amount)) {
            shopping.total = shopping.retailPrice * shopping.amount;
          }
          if (shopping.total < 0) {
            shopping.total = 0;
          }
          shopping.updateDiscount();
          this.synchronizeShoppingCart();
        }
      });
  }

  delete(): void {
    console.log('eliminar linea');
    // const index = this.articles.indexOf(articles);
    // if (index > -1) {
    //   this.articles.splice(index, 1);
    // }
    // this.synchronizeShoppingCart();
  }


  checkboxState(state: ShoppingState): boolean {
    return state === ShoppingState.COMMITTED;
  }

  changeCommitted(shopping: Shopping): void {
    if (shopping.state === ShoppingState.COMMITTED) {
      shopping.state = ShoppingState.NOT_COMMITTED;
    } else {
      shopping.state = ShoppingState.COMMITTED;
    }
  }

  isEmpty(): boolean {
    return (!this.articles || this.articles.length === 0);
  }

  exchangeShoppingCart(): void {
    // this.shoppingCartList[this.indexShoppingCart++] = this.articles;
    this.indexShoppingCart %= 3;
    // this.articles = this.shoppingCartList[this.indexShoppingCart];
    this.synchronizeShoppingCart();
  }

  checkOut(): void {
    this.dialog.open(CheckOutDialogComponent, {data: this.articles}).afterClosed().subscribe(
      result => {
        if (result) {
          this.ngOnInit();
        }
      }
    );
  }

  createBudget(): void {
    // TODO create budget
  }

  selectBudget(budgetReference: string): void {
    // TODO select budget
    this.dialog.open(SelectBudgetDialogComponent, { data: budgetReference, });
  }

  addDiscount(mobile): void {
    // TODO add discount
    if (mobile == 999999999) {
      let total = 0;
      for (const articles of this.articles) {
        // total += articles.total;
      }
      if(total > 100){
        this._snackBar.open("Customer discount applied", "Close",{
          duration: 3000
        });
      }else{
        this.dialog.open(CustomerDiscountDialogComponent,{
          data: { total: 100, left:(100 - total)},});}
    }else{
      this._snackBar.open("No discount associated to this user", "Close",{
        duration: 3000
      });
    }
  }

  addOffer(offer): void {
    // TODO add offer
  }

  showArticlesFamily(): void {
    //TODO
    this.dialog.open(ArticlesFamilyDialogComponent);
  }

}
