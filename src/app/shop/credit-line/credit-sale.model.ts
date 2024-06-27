import {Ticket} from "@shared/models/ticket.model";

export interface CreditSale{
  ticket: Ticket;
  payed: Boolean;
  price: number;
}
