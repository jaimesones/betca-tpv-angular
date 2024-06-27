import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from "@core/auth.service";
import {PayDialogComponent} from "./pay-dialog.component";
import {ShoppingBasketService} from "./shopping-basket.service";
import {MatTable} from "@angular/material/table";

@Component({
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})

export class ShoppingBasketComponent implements OnInit {

  @ViewChild('matTable')
  matTable: MatTable<any>;

  displayedColumns = ['image', 'description', 'amount', 'total', 'actions'];

  username = undefined;
  shoppingItems: Array<any>;

  constructor(private dialog: MatDialog, private authService: AuthService, private shoppingBasketService: ShoppingBasketService) {
  }

  ngOnInit(): void {
    this.synchronizeShoppingCart();
  }

  synchronizeShoppingCart(): void {
    this.shoppingBasketService.getShoppingCartItems().subscribe((res: Array<any>) => {
      this.shoppingItems = res
    }, () => {
      this.shoppingItems = [];
    })
  }

  totalPay(): number {
    let total = 0;
    if (Symbol.iterator in Object(this.shoppingItems)) {
      for (let shopping of this.shoppingItems) {
        total += shopping.amount * shopping.retailPrice;
      }
    }
    return total;
  }

  delete(item): void {
    this.shoppingBasketService.deleteFromShoppingBasket(item.barcode).subscribe(() => {
      this.synchronizeShoppingCart();
    });
  }

  login(): void {
    this.dialog.open(LoginDialogComponent)
      .afterClosed()
      .subscribe(() => this.username = this.authService.getName());
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  onAmountChanged(barcode: string, num: number):void {
    this.shoppingBasketService.updateShoppingBasketAmount(barcode, num).subscribe(() => {
      this.synchronizeShoppingCart();
    })
  }

  pay(): void {
    // this.dialog.open(PayDialogComponent, {data: this.shoppingBasket}).afterClosed().subscribe(
    //   result => {
    //     if (result) {
    //       this.ngOnInit();
    //     }
    //   }
    // );
  }
}
