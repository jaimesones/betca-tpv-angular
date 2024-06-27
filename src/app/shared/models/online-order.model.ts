import {OnlineOrderState} from "@shared/models/online-order-state.model";
import {Ticket} from "@shared/models/ticket.model";

export interface OnlineOrder {
  reference?: string;
  state: OnlineOrderState;
  deliveryDate: Date;
  ticket: Ticket;
}
