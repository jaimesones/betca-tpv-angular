import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Cashier} from "./cashier.model";
import {CashierClosuresManagementSearch} from "./cashier-closures-management-search.model";
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CashierClosuresManagementService {

  static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  search(cashierClosuresSearch: CashierClosuresManagementSearch): Observable<Cashier[]> {
    return this.httpService
      .paramsFrom(cashierClosuresSearch)
      .get(EndPoints.CASHIERS + CashierClosuresManagementService.SEARCH)
      .pipe(
        map(response => response.cashiers)
      );
  }
}
