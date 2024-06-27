import { Component, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import {Observable, of} from "rxjs";

import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {ProviderInvoiceSearch} from "./provider-invoice-search.model";
import {ProviderInvoiceService} from "./provider-invoice.service";
import {ProviderInvoice} from "./provider-invoice.model";
import {ProviderInvoiceCreationUpdatingDialogComponent} from "./provider-invoice-creation-updating-dialog.component";
import {QuarterOfYear} from "./quarter-of-year";
import {Quarter} from "./quarter";

@Component({
  templateUrl: 'provider-invoices.component.html'
})

export class ProviderInvoicesComponent implements OnInit {
  providerInvoiceSearch: ProviderInvoiceSearch;
  title = "Provider Invoices Management";
  providerInvoices = of([]);
  quarterOfYear: QuarterOfYear;
  quarters = Object.keys(Quarter).filter(key => isNaN(Number(key)));
  years: Observable<number[]> = of([]);

  constructor(private dialog: MatDialog, private providerInvoiceService: ProviderInvoiceService) {
    this.resetSearch()
  }

  ngOnInit(): void {
    this.quarterOfYear = (this.quarterOfYear !== undefined) ? this.quarterOfYear : {
      quarter: undefined, year: undefined, totalBaseTax: undefined, totalTaxValue: undefined
    };
  }

  search(): void {
    this.providerInvoices = this.providerInvoiceService.search(this.providerInvoiceSearch);
  }

  resetSearch(): void {
    this.providerInvoiceSearch = {};
  }

  read(providerInvoice: ProviderInvoice): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: "Provider Invoice Details",
        object: this.providerInvoiceService.read(providerInvoice.identity)
      }
    });
  }

  create(): void {
    this.dialog.open(ProviderInvoiceCreationUpdatingDialogComponent);
  }

  update(providerInvoice: ProviderInvoice): void {
    this.providerInvoiceService.read(providerInvoice.identity)
      .subscribe(fullProviderInvoice => this.dialog.open(ProviderInvoiceCreationUpdatingDialogComponent,
        {data: fullProviderInvoice}));
  }

  getTotalForQuarterOfYear(): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: "Total for a Quarter of a Year",
        object: this.providerInvoiceService.getTotalForQuarterOfYear(this.quarterOfYear)
        }
      });
  }

  getYearsOfAllCreationDate(): void {
    this.years = this.providerInvoiceService.getYearsOfAllCreationDate();
  }
}
