import {Component, Inject, OnInit} from '@angular/core';
import {ProviderOrder} from "../provider-order.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ProviderOrderService} from "../provider-order.service";
import {Shopping} from "../../cashier-opened/shopping-cart/shopping.model";
import {ShoppingState} from "../../cashier-opened/shopping-cart/shopping-state.model";

export interface PeriodicElement {
  position: number;
  barcode: string;
  description: string;
  requiredAmount: number;
  finalAmount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, barcode: '7866767867867', description: 'Camisa SportCliff', requiredAmount: 12, finalAmount: 0 },
  {position: 2, barcode: '1231231311233', description: 'Short Deportivo', requiredAmount: 2, finalAmount: 0 },
];

@Component({
  selector: 'app-provider-order-updating-dialog',
  templateUrl: './provider-order-updating-dialog.component.html',
  styleUrls: ['./provider-order-updating-dialog.component.css']
})
export class ProviderOrderUpdatingDialogComponent implements OnInit {

  displayedColumns: string[] = ['position', 'barcode', 'description', 'requiredAmount', 'finalAmount'];
  dataSource = ELEMENT_DATA;

  providerOrder: ProviderOrder;
  title: string;
  oldProvider: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: ProviderOrder, private providerOrderService: ProviderOrderService, private dialog: MatDialog) {
    this.title = data ? 'Update Provider Order' : 'Create Provider Order';
    this.providerOrder = data ? data : {company: undefined, reference: undefined, openingDate: undefined, orderLines: []};
    this.oldProvider = data ? data.company : undefined;
  }

  ngOnInit(): void {
  }

  isCreate(): boolean {
    return this.oldProvider === undefined;
  }

  create(): void {
    this.providerOrderService
      .create(this.providerOrder)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    this.providerOrderService
      .update(this.oldProvider, this.providerOrder)
      .subscribe(() => this.dialog.closeAll());
  }


  invalid(): boolean {
    return this.check(this.providerOrder.company) || this.check(this.providerOrder.description) || this.check(this.providerOrder.reference);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

  delete(): void {
    console.log('eliminar linea');
  }

  incrementAmount(periodic: PeriodicElement): void {
    periodic.finalAmount++;
    if (periodic.finalAmount === 0) {
      periodic.finalAmount++;
    }
    // periodic.updateTotal();
    // this.synchronizeShoppingCart();
  }

  decreaseAmount(periodic: PeriodicElement): any {
    if (periodic.finalAmount > 0) {
      periodic.finalAmount--;
      // periodic.state = ShoppingState.COMMITTED;
    }
    // shopping.updateTotal();
    // this.synchronizeShoppingCart();
  }

  close() {
    console.log('cerrar pedido');
  }
}
