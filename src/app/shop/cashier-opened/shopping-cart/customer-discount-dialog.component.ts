import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CustomerDiscountService} from "../../shared/services/shared.customer-discount.service";
import {Observable} from "rxjs";
import {CustomerDiscountModel} from "../../customer-discount/customer-discount.model";
import {Shopping} from "./shopping.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-shopping-cart-discount-less-than-dialog',
  templateUrl: './customer-discount-dialog.component.html',
})
export class CustomerDiscountDialogComponent {
  selected_customer_discount: Observable<CustomerDiscountModel>;
  customer_discount:CustomerDiscountModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{mobile:number, cart:Shopping[]} ,
    private customerDiscountService:CustomerDiscountService,
    private _snackBar: MatSnackBar
  ) {
    this.selected_customer_discount = this.customerDiscountService.read(data.mobile);
    this.selected_customer_discount.subscribe({
      next: customer_discount =>{
        this.customer_discount = customer_discount;
      }
    })

  }

  calculateTotal(cart: Shopping[]): number {
    let total = 0;

    for (const shopping of cart) {
      total += shopping.total;
    }
    return total;
  }

  updateDiscount(cart:Shopping[]){
    for(let i= 0; i< cart.length;i++) {
      cart[i].discount = this.customer_discount.discount;
      cart[i].updateTotal();
    }
  }

  applyDiscount(cart:Shopping[]) {
    let total =  this.calculateTotal(cart);
    let minimmumPurchase = this.customer_discount.minimmumPurchase

    if (total > minimmumPurchase){
      this.updateDiscount(cart);
      this._snackBar.open("Customer discount applied", "Close",{
        duration: 3000
      });

    }else{
      this._snackBar.open("Customer discount not applied" , "Close",{
        duration: 3000
      });
    }
  }
}
