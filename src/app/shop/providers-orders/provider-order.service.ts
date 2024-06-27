import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '@core/http.service';
import { ProviderOrderSearch } from "./provider-order-search.model";
import { ProviderOrder } from "./provider-order.model";
import { EndPoints } from "@shared/end-points";

@Injectable({
  providedIn: 'root'
})
export class ProviderOrderService {

  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(providerOrder: ProviderOrder): Observable<ProviderOrder> {
    return this.httpService
      .post(EndPoints.PROVIDERS, providerOrder);
  }

  read(company: string): Observable<ProviderOrder> {
    return this.httpService
      .get(EndPoints.PROVIDERS + '/' + company);
  }

  update(oldCompany: string, providerOrder: ProviderOrder): Observable<ProviderOrder> {
    return this.httpService
      .successful()
      .put(EndPoints.PROVIDERS + '/' + oldCompany, providerOrder);
  }

  search(providerOrderSearch: ProviderOrderSearch): Observable<ProviderOrder[]> {
    return this.httpService
      .paramsFrom(providerOrderSearch)
      .get(EndPoints.PROVIDERS + ProviderOrderService.SEARCH);
  }

}
