import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Observable, of} from "rxjs";

import {ProviderInvoice} from "./provider-invoice.model";
import {ProviderInvoiceService} from "./provider-invoice.service";

@Component({
  templateUrl: 'provider-invoice-creation-updating-dialog.component.html',
  styleUrls: ['provider-invoice-creation-updating-dialog.component.css']
})

export class ProviderInvoiceCreationUpdatingDialogComponent {
  title: string;
  providerInvoice: ProviderInvoice;
  identity: string;
  companies: Observable<string[]> = of([]);
  orders: Observable<string[]> = of([]);

  constructor(@Inject(MAT_DIALOG_DATA) data: ProviderInvoice, private providerInvoiceService: ProviderInvoiceService, private dialog: MatDialog) {
    this.title = data ? "Update Provider Invoice" : "Create Provider Invoice";
    this.identity = data ? data.identity : undefined;
    this.providerInvoice = data ? data : {
      identity: undefined, creationDate: undefined, baseTax: undefined, textValue: undefined,
      providerCompany: undefined, orderReference: undefined
    };
  }

  isCreate(): boolean {
    return this.identity === undefined;
  }

  create(): void {
    this.providerInvoiceService
      .create(this.providerInvoice)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    this.providerInvoiceService
      .update(this.identity, this.providerInvoice)
      .subscribe(() => this.dialog.closeAll())
  }

  invalid(): boolean {
    return this.checkStr(this.providerInvoice.providerCompany) || this.checkStr(this.providerInvoice.orderReference)
      || this.checkNumber(this.providerInvoice.baseTax) || this.checkNumber(this.providerInvoice.textValue);
  }

  checkStr(value: string): boolean {
    return value === undefined || null || value === "";
  }

  checkNumber(value: number): boolean {
    return value === undefined || null;
  }
}
