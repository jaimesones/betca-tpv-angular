import {Injectable} from '@angular/core';
import {ArticlesTree} from "./articlesTree.model";
import {Observable} from "rxjs";

import {HttpService} from '@core/http.service';
import {EndPoints} from "@shared/end-points";

@Injectable({
  providedIn: 'root'
})
export class ArticlesFamilyService {

  constructor(private httpService: HttpService) {
  }

  readArticlesTree(reference : string) : Observable<ArticlesTree[]>{
    return this.httpService
      .param('reference', reference)
      .get(EndPoints.ARTICLES_FAMILY + '/' + reference)
  }
}
