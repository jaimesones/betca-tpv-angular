import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Invoice} from "../shared/models/invoice.model";
import {SharedInvoiceService} from "../shared/services/shared.invoice.service";
import {User} from "../shared/models/user.models";
import {SharedUserService} from "../shared/services/shared.user.service";

@Component({
  templateUrl: 'invoice-creation-updating-dialog.component.html',
  styleUrls: ['invoice-creation-updating-dialog.component.css']
})
export class InvoiceCreationUpdatingDialogComponent {
  title: string;
  invoice: Invoice;
  oldIdentity: number;
  user: User;

  constructor(@Inject(MAT_DIALOG_DATA) data: Invoice, private invoiceService: SharedInvoiceService,
              private userService: SharedUserService, private dialog: MatDialog) {
    this.title = data ? 'Update Invoice' : 'Create Invoice';
    this.invoice = data ? data : {
      identity: undefined, ticketId: undefined, userMobile: undefined
    }
    this.oldIdentity = data ? data.identity : undefined;
    this.user = data ? {mobile: Number(data.userMobile)} : undefined;
  }

  create(): void {
    this.invoiceService
      .create(this.invoice.ticketId)
      .subscribe(() => this.dialog.closeAll())
  }

  update(): void {
    this.invoiceService
      .update(this.oldIdentity, this.invoice)
      .subscribe(() => this.dialog.closeAll());
  }

  isCreate(): boolean {
    return !this.oldIdentity;
  }

  invalid(): boolean {
    return this.user === undefined ||
      this.user.dni === undefined ||
      this.user.firstName === undefined ||
      this.user.familyName === undefined ||
      this.user.address === undefined;
  }

  searchUser(mobile: number) {
    if (mobile) {
      this.userService.read(Number(mobile)).subscribe(
        (user) => {
          this.user = user;
          this.invoice.userMobile = this.user.mobile.toString();
        })
    }
  }

  invalidCreate() {
    return this.invoice.ticketId === undefined;
  }
}
