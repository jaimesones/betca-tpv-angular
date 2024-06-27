import {Injectable} from '@angular/core';
import {StockAlarmLine} from "../models/stock-alarm-line.model";
import {ArticleService} from "../../shared/services/article.service";
import {Observable} from "rxjs";
import {Article} from "../../shared/services/models/article.model";

@Injectable({
  providedIn: 'root'
})
export class StockAlarmLineService {

  constructor(private articleService: ArticleService) {
  }

  update(oldBarcode: string, stockAlarmLine: StockAlarmLine) {
    return undefined;
  }

  create(stockAlarmLine: StockAlarmLine) {
    return undefined;
  }

  search(barcode: string): Observable<Article> {
    return this.articleService.read(barcode);
  }
}
