import { Component, OnInit } from '@angular/core';
import { ProviderOrderSearch } from "./provider-order-search.model";
import { ReadDetailDialogComponent } from "@shared/dialogs/read-detail.dialog.component";
import { of } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { ProviderOrderService } from "./provider-order.service";
import { ProviderOrder } from "./provider-order.model";
import { ProviderOrderCreationDialogComponent } from "./provider-order-creation-dialog/provider-order-creation-dialog.component";
import { ProviderOrderUpdatingDialogComponent } from "./provider-order-updating-dialog/provider-order-updating-dialog.component";

@Component({
  selector: 'app-providers-orders',
  templateUrl: './providers-orders.component.html',
  styleUrls: ['./providers-orders.component.css']
})
export class ProvidersOrdersComponent {

  providerOrderSearch: ProviderOrderSearch;
  title = 'Providers orders';
  providersOrders = of([]);

  constructor(private dialog: MatDialog, private providerOrderService: ProviderOrderService) {
    this.resetSearch();
  }

  search(): void {
    this.providersOrders = this.providerOrderService.search(this.providerOrderSearch);
  }

  resetSearch(): void {
    this.providerOrderSearch = {};
  }

  create(): void {
    this.dialog
      .open(ProviderOrderCreationDialogComponent)
      .afterClosed()
      .subscribe(() => this.search());
  }

  read(providerOrder: ProviderOrder): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Provider Order Details',
        object: this.providerOrderService.read(providerOrder.company)
      }
    });
  }

  update(providerOrder: ProviderOrder): void {
    this.providerOrderService
      .read(providerOrder.company)
      .subscribe(fullProvider => this.dialog.open(ProviderOrderUpdatingDialogComponent, {data: fullProvider})
        .afterClosed()
        .subscribe(() => this.search())
      );
  }

  delete(providerOrder: ProviderOrder): void {
    console.log(providerOrder);
  }

}
