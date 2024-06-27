import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {CustomerDiscountModel} from "./customer-discount.model";

import {CustomerDiscountService} from "../shared/services/shared.customer-discount.service";
import {CustomerDiscountSearch} from "./customer-discount-search";
import {MatDialog} from "@angular/material/dialog";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {CustomerDiscountCreationUpdatingDialogComponent} from "./customer-discount-creation-updating-dialog.component";

@Component({
  selector: 'app-customer-discount',
  templateUrl: './customer-discount.component.html',
  styleUrls: ['./customer-discount.component.css']
})
export class CustomerDiscountComponent implements OnInit {
  customerDiscountSearch : CustomerDiscountSearch;
  title = 'Customer Discounts';
  discounts = of([]);

  constructor(private dialog: MatDialog, private customerDiscountService: CustomerDiscountService) {
    this.resetSearch();
  }

  ngOnInit(): void {
  }

  search(): void {
    this.discounts = this.customerDiscountService.search(this.customerDiscountSearch);
  }

  resetSearch(): void {
    this.customerDiscountSearch = {};
  }

  create(): void {
    this.dialog.open(CustomerDiscountCreationUpdatingDialogComponent);
  }

  read(customerDiscount: CustomerDiscountModel): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Customer Discounts Details',
        object: this.customerDiscountService.read(customerDiscount.userMobile)
      }
    });
  }

  update(customerDiscount: CustomerDiscountModel): void {
    this.customerDiscountService.read(customerDiscount.userMobile)
      .subscribe(discount => this.dialog.open(CustomerDiscountCreationUpdatingDialogComponent, {data: discount}));
  }

  delete(customerDiscount:CustomerDiscountModel): void {
    this.customerDiscountService.delete(customerDiscount.userMobile).subscribe();
  }

}
