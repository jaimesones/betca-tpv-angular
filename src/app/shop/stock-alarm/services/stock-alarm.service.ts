import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {StockAlarm} from "../models/stock-alarm.model";
import {HttpService} from "@core/http.service";
import {StockAlarmSearch} from "../models/stock-alarm-search.model";
import {Article} from "../../shared/services/models/article.model";

@Injectable({
  providedIn: 'root'
})
export class StockAlarmService {

  articles: Article[] = [
    {
      barcode: "00000",
      description: "Desc1",
      retailPrice: 1,
      providerCompany: "company",
      stock: 2
    },
    {
      barcode: "00002",
      description: "Desc2",
      retailPrice: 2,
      providerCompany: "company2",
      stock: 2
    },
    {
      barcode: "00002",
      description: "Desc2",
      retailPrice: 2,
      providerCompany: "company2",
      stock: 10
    },

  ]


  stockAlarmArray = [
    {name: "Alarm1", description: "desc1", warning: 3, critical: 1},
    {name: "Alarm2", description: "desc2", warning: 3, critical: 1}
  ];

  constructor(private httpService: HttpService) {
  }

  read(name: string): Observable<StockAlarm> {
    return of({name: "Alarm1", description: "desc1", warning: 3, critical: 1});
  }

  search(alarmSearch: StockAlarmSearch): Observable<StockAlarm[]> {
    return of(this.stockAlarmArray);
  }

  create(stockAlarm: StockAlarm): Observable<StockAlarm> {
    return undefined;
  }

  update(oldName: string, stockAlarm: StockAlarm): Observable<StockAlarm> {
    return undefined;
  }

  getArticles() {
    return of(this.articles);
  }
}
