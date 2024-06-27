import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpService} from '@core/http.service';
import {Article} from './models/article.model';
import {ArticleSearch} from './models/article-search.model';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  static PREDICTION = '/prediction';
  static SEARCH = '/search';

  constructor(private httpService: HttpService) { }

  searchByDate(articleSearch: ArticleSearch): Observable<Article[]> {
    return this.httpService
      .paramsFrom(articleSearch)
      .get(EndPoints.TICKETS + TicketService.SEARCH);
  }

  searchForPrediction(articleSearch: ArticleSearch): Observable<Article[]> {
    return this.httpService
      .paramsFrom(articleSearch)
      .get(EndPoints.TICKETS + TicketService.PREDICTION);
  }
}
