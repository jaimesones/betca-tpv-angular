import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CashierClosuresManagementService} from "./cashier-closures-management.service";
import {of} from "rxjs";
import {MatDatepicker} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material/core";
import {FormControl} from "@angular/forms";
import {CashierClosuresManagementSearch} from "./cashier-closures-management-search.model";
import {CustomDateAdapter} from "./custom-date-adapter";

export const MY_FORMATS = {
  parse: {
    dateInput: {month: 'long', year: 'numeric'},
  },
  display: {
    dateInput: 'month-year',
  },
};

@Component({
  templateUrl: './cashier-closures-management.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    }
  ]
})
export class CashierClosuresManagementComponent {

  cashierClosures = of([]);
  cashierClosuresSearch: CashierClosuresManagementSearch;
  title = 'Cashier closures management';
  date = new FormControl(new Date());
  maxDate = new Date();
  dateFilter = 'none';

  constructor(private dialog: MatDialog, private cashierClosureService: CashierClosuresManagementService) {
    this.resetSearch();
    this.cashierClosuresSearch = {
      startDate: new Date(0).toISOString(),
      endDate: new Date().toISOString()
    };
  }

  setYear(date: Date) {
    let newDate = this.date.value;
    newDate.setFullYear(date.getFullYear());
    this.date.setValue(newDate);
  }

  setMonth(date: Date, datepicker: MatDatepicker<Date>) {
    let newDate = this.date.value;
    newDate.setMonth(date.getMonth());
    this.date.setValue(newDate);
    datepicker.close();
  }

  search(): void {
    let startDate = new Date(0);
    let endDate = new Date();
    if (this.dateFilter == 'both') {
      startDate = new Date(this.date.value.getFullYear(), this.date.value.getMonth(), 1);
      endDate = new Date(this.date.value.getFullYear(), this.date.value.getMonth() + 1, 1);
    } else if (this.dateFilter == 'year') {
      startDate = new Date(this.date.value.getFullYear(), 0, 1);
      endDate = new Date(this.date.value.getFullYear() + 1, 0, 1);
    }
    this.cashierClosuresSearch.startDate = startDate.toISOString();
    this.cashierClosuresSearch.endDate = endDate.toISOString();
    this.cashierClosures = this.cashierClosureService.search(this.cashierClosuresSearch);
  }

  resetSearch(): void {
    this.date.setValue(new Date());
    this.dateFilter = 'none';
  }

}
