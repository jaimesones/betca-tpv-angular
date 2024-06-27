import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Messenger} from "../models/messenger.model";
import {MessengerSearch} from "./models/messenger-search.model";
import {EndPoints} from "@shared/end-points";
import {HttpService} from "@core/http.service";

@Injectable({
  providedIn: 'root'
})
export class MessengersService {


  constructor(private httpService: HttpService) { }

  search(messengerSearch: MessengerSearch): Observable<Messenger[]> {
    return of([
      { id:'1', fromUser: '6', toUser: '7', subject: 'Hello', text: 'Hello', read:false },

    ]);
  }

  public read(id: string): Observable<Messenger> {
    return this.httpService
      .get(EndPoints.MESSENGERS + '/' + id);
  }

  public create(messenger: Messenger): Observable<Messenger> {
    return this.httpService
      .post(EndPoints.MESSENGERS, messenger);
  }
}
