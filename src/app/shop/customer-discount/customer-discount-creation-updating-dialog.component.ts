import {Component, Inject, OnInit} from '@angular/core';
import {of} from "rxjs";
import {CustomerDiscountModel} from "./customer-discount.model";
import {MAT_DIALOG_DATA, MatDialog,} from "@angular/material/dialog";
import {CustomerDiscountService} from "../shared/services/shared.customer-discount.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-customer-discount-creation-updating-dialog',
  templateUrl: './customer-discount-creation-updating-dialog.component.html',
  styleUrls: ['./customer-discount-creation-updating-dialog.component.css']
})
export class CustomerDiscountCreationUpdatingDialogComponent implements OnInit {

  customerDiscount: CustomerDiscountModel;
  title: string;
  oldMobile: number;
  discounts = of([]);

  constructor(@Inject(MAT_DIALOG_DATA) data: CustomerDiscountModel, private customerDiscountService: CustomerDiscountService,
              private dialog: MatDialog) {
    this.title = data ? 'Update Customer Discount' : 'Create New Customer Discount';
    this.customerDiscount = data ? data : {
      userMobile:undefined,
      note:undefined,
      registrationDate:undefined,
      discount:undefined,
      minimmumPurchase:undefined,
    };
    this.oldMobile = data ? data.userMobile : undefined;

  }

  ngOnInit(): void {
    }

  isCreate(): boolean {
    return this.oldMobile === undefined;
  }

  create(): void {
     this.customerDiscountService
      .create(this.customerDiscount)
      .subscribe(() => this.dialog.closeAll())
  }

  update():void{
    this.customerDiscountService
      .update(this.oldMobile, this.customerDiscount)
      .subscribe(() => this.dialog.closeAll());

  }

  invalid(): boolean {
    return this.check(this.customerDiscount.userMobile) || this.check(this.customerDiscount.discount)
      || this.check(this.customerDiscount.minimmumPurchase);
  }

  check(attr: any): boolean {
    return attr === undefined || null || attr === '';
  }
}
