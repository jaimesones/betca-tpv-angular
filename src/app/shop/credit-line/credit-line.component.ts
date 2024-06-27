import { Component } from "@angular/core";
import {Observable, of} from "rxjs";
import {CreditLine} from "./credit-line.model";
import {MatDialog} from "@angular/material/dialog";
import {CreditLineService} from "./credit-line.service";
import {CreditLineSearch} from "./credit-line-search.model";
import {CreditLineCreationUpdatingDialogComponent} from "./credit-line-creation-updating-dialog.component";
import {CreditLineSimplified} from "./credit-line-simplified.model";

@Component({
  templateUrl: 'credit-line.component.html',
  styleUrls: ['credit-line.component.css']
})
export class CreditLineComponent {

  creditLines = of([]);
  title = 'Credit lines management';
  creditLineSearch: CreditLineSearch;
  actualMobile: string = 'Hello';

  creditSales = of([]);
  displayedColumns = ['ticketReference','price','payed','actions'];

  constructor(private dialog: MatDialog, private creditLineService: CreditLineService) {
    this.actualMobile = '';
    this.resetSearch();
    this.creditLines = new Observable<CreditLineSimplified[]>();
  }

  resetSearch(): void {
    this.creditLineSearch = {};
  }

  create(): void {
    this.dialog.open(CreditLineCreationUpdatingDialogComponent);
  }

  search(): void {
    if(this.creditLineSearch.mobile == undefined || this.creditLineSearch.mobile.trim() == '') {
      this.creditLines = this.creditLineService.readAll();
    }
    else {
      this.creditLineService.search(this.creditLineSearch)
        .subscribe(value => {
          this.creditLines = of([value]);
        })
    }
  }

  readCreditSales(creditLine: CreditLine) {
    this.actualMobile = creditLine.mobile;
    this.creditSales = this.creditLineService.readCreditSales(creditLine.mobile);
  }
}
