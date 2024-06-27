import {Observable, of} from "rxjs";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SharedOrderService} from "./services/shared.order.service";

@Component({
  selector: "app-search-by-order-reference",
  templateUrl: "search-by-order-reference.component.html"
})
export class SearchByOrderReferenceComponent {
  orders: Observable<string[]> = of([]);

  @Input() order: string;
  @Output() orderChange = new EventEmitter<string>();

  constructor(private sharedOrderService: SharedOrderService) {
  }

  public onSelect(): void {
    this.orderChange.emit(this.order);
  }

  searchByOrderReference(): void {
    this.orders = this.sharedOrderService.searchOrders(this.order);
  }
}
