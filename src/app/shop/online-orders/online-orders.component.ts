import { Component, OnInit } from '@angular/core';
import {OnlineOrder} from "@shared/models/online-order.model";
import {OnlineOrderState, OnlineOrderState2LabelMapping} from "@shared/models/online-order-state.model";

@Component({
  selector: 'app-online-orders',
  templateUrl: './online-orders.component.html',
  styleUrls: ['./online-orders.component.css']
})
export class OnlineOrdersComponent implements OnInit {

  displayedColumns = ['reference', 'deliveryDate', 'ticket', 'state', 'saveState'];
  // displayedColumns = ['reference', 'deliveryDate', 'ticket', 'saveState'];
  onlineOrder1: OnlineOrder = {reference: '680001', state: OnlineOrderState.DELIVERED,
    deliveryDate: new Date('2020-01-01'), ticket: {id: '0001', reference: '888880001', mobile: 688930112}};
  onlineOrder2: OnlineOrder = {reference: '680002', state: OnlineOrderState.SENT,
    deliveryDate: new Date('2020-02-28'), ticket: {id: '0002', reference: '888880002', mobile: 688631677}};
  onlineOrder3: OnlineOrder = {reference: '680003', state: OnlineOrderState.PREPARING,
    deliveryDate: new Date('2020-04-01'), ticket: {id: '0003', reference: '888880003', mobile: 688987646}};
  onlineOrders = [this.onlineOrder1, this.onlineOrder2, this.onlineOrder3];

  onlineOrderStates = [OnlineOrderState.PREPARING, OnlineOrderState.SENT, OnlineOrderState.DELIVERED];
  stateMapping = OnlineOrderState2LabelMapping


  constructor() { }

  ngOnInit(): void {
  }

}
