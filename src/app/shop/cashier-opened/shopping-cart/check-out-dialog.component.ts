import {Component, Inject} from '@angular/core';

import {TicketCreation} from './ticket-creation.model';
import {ShoppingCartService} from './shopping-cart.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GiftTicketDialogComponent} from "./gift-ticket-dialog.component";
import {GiftTicket} from "./gift-ticket.model";
import {SharedUserService} from "../../shared/services/shared.user.service";
import {ConsumeVoucherDialogComponent} from "./consume-voucher-dialog.component";
import {SharedCustomerPointsService} from "@shared/services/shared.customer-points.service";

@Component({
  templateUrl: 'check-out-dialog.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class CheckOutDialogComponent {
  ticketCreation: TicketCreation;
  totalPurchase: number;
  requestedInvoice = false;
  requestedGiftTicket = false;
  requestedDataProtectionAct = false;
  giftTicket: GiftTicket;
  creditLinePayment = false;
  customerPointsValue : number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) data, private dialogRef: MatDialogRef<CheckOutDialogComponent>,
              private shoppingCartService: ShoppingCartService, private dialog: MatDialog,
              private sharedUserService: SharedUserService,
              private sharedCustomerPointsService: SharedCustomerPointsService) {
    this.ticketCreation = {cash: 0, card: 0, voucher: 0, shoppingList: data, note: ''};
    this.giftTicket = {message: " ", ticket: " "}
    this.total();
  }

  total(): void {
    this.totalPurchase = 0;
    for (const shopping of this.ticketCreation.shoppingList) {
      this.totalPurchase = this.totalPurchase + shopping.total;
    }
    this.totalPurchase = Math.round(this.totalPurchase * 100) / 100;
  }

  format(value: number): number {
    return value ? value : 0; // empty string,NaN,false,undefined,null,0 is: false
  }

  searchUser(mobile: string): void {
    if (mobile) {
      // TODO falta buscar el user en BD, si no existe, debe sacar un dialogo para crearlo
      this.ticketCreation.user = {mobile: Number(mobile)};
      this.sharedUserService.read(Number(mobile)).subscribe(
        (user) => {
          this.ticketCreation.user = user;
          this.getCustomerPointsValue();
        },
      )
    }
  }

  managedMobile(): boolean {
    return !!this.ticketCreation.user;
  }

  resetMobile(): void {
    this.ticketCreation.user = undefined;
  }

  unCommitted(): boolean {
    for (const shopping of this.ticketCreation.shoppingList) {
      if (!shopping.state && shopping.amount > 0) {
        return true;
      }
    }
    return false;
  }

  totalCommitted(): number {
    let total = 0;
    for (const shopping of this.ticketCreation.shoppingList) {
      if (shopping.state) {
        total += shopping.total;
      }
    }
    return Math.round(total * 100) / 100;
  }

  warning(): boolean {
    return !this.managedMobile() && this.unCommitted();
  }

  returnedAmount(): number {
    return Math.round(
      (this.format(this.ticketCreation.cash)
        + this.format(this.ticketCreation.card)
        + this.format(this.ticketCreation.voucher)
        - this.totalPurchase) * 100
    ) / 100;
  }

  returnedCash(): number {
    if (this.ticketCreation.cash >= this.returnedAmount()) {
      return this.returnedAmount();
    } else {
      return this.ticketCreation.cash;
    }
  }

  fillCard(): void {
    if (this.returnedAmount() < 0) {
      this.ticketCreation.card = -this.returnedAmount();
    } else {
      this.ticketCreation.card = this.totalPurchase;
      this.ticketCreation.cash = 0;
    }
  }

  fillCash(): void {
    this.ticketCreation.cash = this.format(this.ticketCreation.cash);
    if (this.returnedAmount() < 0 && this.ticketCreation.cash === 0) {
      this.ticketCreation.cash = -this.returnedAmount();
    } else if (this.ticketCreation.cash < 20) {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 5) + 1) * 5;
    } else if (this.ticketCreation.cash < 50) {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 10) + 1) * 10;
    } else {
      this.ticketCreation.cash = (Math.round(this.ticketCreation.cash / 50) + 1) * 50;
    }
  }

  consumeVoucher(): void {
    // TODO consumir un vale que se entrega como parte del pago
    this.dialog.open(ConsumeVoucherDialogComponent);
  }

  invalidCheckOut(): boolean {
    return (this.totalPurchase + this.returnedAmount() - this.totalCommitted() < -0.01); // rounding errors
  }

  round(value): any {
    return Math.round(value * 100) / 100;
  }

  pay(): any {
    const returned = this.returnedAmount();
    const cash = this.ticketCreation.cash;
    let voucher = 0;
    this.ticketCreation.cash = this.format(this.ticketCreation.cash);
    this.ticketCreation.card = this.format(this.ticketCreation.card);
    this.ticketCreation.voucher = this.format(this.ticketCreation.voucher);

    if (returned > 0) {
      this.ticketCreation.cash -= returned;
    }
    if (this.ticketCreation.cash < 0) {
      voucher = -this.ticketCreation.cash;
      this.ticketCreation.cash = 0;
    }

    //TODO validar si un ticket está asociado a un usuario, en la impresión del ticket se le indicará los puntos acumulados hasta el momento.
    this.ticketCreation.note = 'Saved points: ' + this.customerPointsValue.toString();

    if (this.ticketCreation.card > 0) {
      this.ticketCreation.note += ' Pay with card: ' + this.round(this.ticketCreation.card) + '.';
    }
    if (this.ticketCreation.voucher > 0) {
      this.ticketCreation.note += ' Pay with voucher: ' + this.round(this.ticketCreation.voucher) + '.';
    }
    if (this.ticketCreation.cash > 0) {
      this.ticketCreation.note += ' Pay with cash: ' + this.round(cash) + '.';
    }
    if (!this.ticketCreation.note) {
      this.ticketCreation.note += ' No Pay.';
    }
    if (returned > 0) {
      this.ticketCreation.note += ' Return: ' + this.round(returned) + '.';
    }

    this.shoppingCartService.createTicketAndPrintReceipts(this.ticketCreation, voucher,
      this.requestedInvoice, this.requestedGiftTicket, this.requestedDataProtectionAct)
      .subscribe(() => this.dialogRef.close(true));
  }

  invalidInvoice(): boolean {
    return this.ticketCreation.user === undefined ||
      this.ticketCreation.user.dni === undefined ||
      this.ticketCreation.user.firstName === undefined ||
      this.ticketCreation.user.familyName === undefined ||
      this.ticketCreation.user.address === undefined;
  }

  clickedGiftTicket(): void {
    if (this.requestedGiftTicket == true) {
      const giftDialog = this.dialog.open(GiftTicketDialogComponent, {
        width: '250px',
        data: {message: this.giftTicket.message},
      });
      giftDialog.afterClosed().subscribe(giftMessage => {
        console.log("The dialog was closed. Mensaje:" + giftMessage);
        this.giftTicket.message = giftMessage;
      });
    }
  }

  getCustomerPointsValue(): void {
    this.sharedCustomerPointsService
      .read(this.ticketCreation.user.mobile?.toString()).subscribe(gotten => {
      this.customerPointsValue = gotten.value;
    });
  }

  clickedUsePoints(): void {}

}
