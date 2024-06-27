import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {TechnicalSupportSearch} from "@shared/models/technical-support-search.model";
import {TechnicalSupportRequest} from "@shared/models/technical-support-request.model";
import {EndPoints} from "@shared/end-points";
import {HttpService} from '@core/http.service';

@Injectable({
  providedIn: 'root'
})
export class TechnicalSupportService {
  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }
  search(technicalSupportSearch: TechnicalSupportSearch): Observable<TechnicalSupportRequest[]>{
    return this.httpService
      .paramsFrom(technicalSupportSearch)
      .get(EndPoints.TECHNICAL_SUPPORT_REQUESTS + TechnicalSupportService.SEARCH);
  }

  read(identifier: string) : Observable<TechnicalSupportRequest>{
   return this.httpService
     .get(EndPoints.TECHNICAL_SUPPORT_REQUESTS + '/' + identifier);
  }

  create(technicalSupportRequest: TechnicalSupportRequest) {
    return this.httpService
      .successful("Created")
      .post(EndPoints.TECHNICAL_SUPPORT_REQUESTS, technicalSupportRequest);
  }

  update(oldIdentifier: string, request: TechnicalSupportRequest): Observable<TechnicalSupportRequest> {
    return this.httpService
      .successful("Updated")
      .put(EndPoints.TECHNICAL_SUPPORT_REQUESTS + '/' + oldIdentifier, request);
  }
}
