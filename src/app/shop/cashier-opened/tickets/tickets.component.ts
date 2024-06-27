import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {Ticket} from "@shared/models/ticket.model";
import {MatDialog} from "@angular/material/dialog";
import {TicketsService} from "./tickets.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  giftTicket: string;
  tickets = of([]);
  title = 'Ticket management';
  ticket: Ticket;

    constructor(private ticketsService: TicketsService) {
  }

  ngOnInit(): void {
  }

  read(ticket: Ticket) : void {
    return null;
  }
  update(ticket: Ticket) : void {
    return null;
  }

  searchByGiftTicket(): void {
    this.tickets = this.ticketsService.searchByGiftTicket(this.giftTicket);
  }


}
