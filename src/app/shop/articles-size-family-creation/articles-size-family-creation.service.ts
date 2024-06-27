import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {HttpService} from '@core/http.service';
import {ArticleSizeFamily} from "./article-size-family.model";
import {EndPoints} from '@shared/end-points';


@Injectable({
  providedIn: 'root',
})
export class ArticlesSizeFamilyCreationService {
  static SEARCH = '/search';
  static UNFINISHED = '/unfinished';

  constructor(private httpService: HttpService) {
  }

  create(articleSizeFamily: ArticleSizeFamily): Observable<void> {
    return of(console.log('Success'));
    // return this.httpService
    //   .post(EndPoints.ARTICLES_SIZE_FAMILY, articleSizeFamily);
  }
}
