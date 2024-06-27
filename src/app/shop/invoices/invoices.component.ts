import {Component} from '@angular/core';
import {of} from "rxjs";

import {InvoiceSearch} from "../shared/models/invoice-search.model";
import {SharedInvoiceService} from "../shared/services/shared.invoice.service";
import {Invoice} from "../shared/models/invoice.model";
import {MatDialog} from "@angular/material/dialog";
import {InvoiceCreationUpdatingDialogComponent} from "./invoice-creation-updating-dialog.component";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";

@Component({
  templateUrl: 'invoices.component.html'
})
export class InvoicesComponent {
  identity: number;
  invoiceSearch: InvoiceSearch;
  invoices = of([]);
  title = 'Invoices management';

  constructor(private dialog: MatDialog, private invoiceService: SharedInvoiceService) {
    this.resetSearch();
  }

  search(): void {
    this.invoices = this.invoiceService.search(this.invoiceSearch);
  }

  resetSearch(): void {
    this.invoiceSearch = {};
  }

  create(): void {
    this.dialog.open(InvoiceCreationUpdatingDialogComponent);
  }

  read(invoice: Invoice) {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Invoice Details + PDF Version',
        object: this.invoiceService.read(invoice.identity)
      }
    });
  }

  update(invoice: Invoice) {
    this.invoiceService.read(invoice.identity)
      .subscribe(fullInvoice => this.dialog.open(InvoiceCreationUpdatingDialogComponent, {data: fullInvoice}));
  }

  readAndPDF(invoice: Invoice) {
    this.invoiceService.readReceipt(invoice.identity)
      .subscribe(() => this.read(invoice));
  }
}
