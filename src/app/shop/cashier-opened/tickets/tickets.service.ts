import {Injectable} from "@angular/core";
import {Ticket} from "@shared/models/ticket.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  searchByGiftTicket(giftTicket: String): Observable<Ticket[]> {
    return of([
      {id: "a1", reference: "a1", mobile:666111222}
    ])
  }
}
