import {CreditLineSearch} from "./credit-line-search.model";
import {Observable, of} from "rxjs";
import {CreditSale} from "./credit-sale.model";
import {CreditLineSimplified} from "./credit-line-simplified.model";
import {Injectable} from "@angular/core";
import {CreditLineCreation} from "./credit-line-creation";
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";

@Injectable({
  providedIn: 'root',
})
export class CreditLineService {

  constructor(private httpService: HttpService) {
  }

  search(creditLineSearch: CreditLineSearch) : Observable<CreditLineSimplified>{
    return this.httpService
      .get(EndPoints.CREDIT_LINES + '/' + creditLineSearch.mobile);
  }

  readAll(): Observable<CreditLineSimplified[]> {
    return this.httpService
      .get(EndPoints.CREDIT_LINES);
  }

  readCreditSales(mobile: string): Observable<CreditSale[]> {
    return of(
          [
            { payed: false, price: 23.30,   ticket: {id: "1", reference: "r1", mobile:+mobile}},
            { payed: true,  price: 54.10,   ticket: {id: "2", reference: "r2", mobile:+mobile}},
            { payed: false, price: 1123.30, ticket: {id: "3", reference: "r3", mobile:+mobile}}
          ]
    );
  }

  create(mobile: string): Observable<CreditLineSimplified> {
    let creditLineCreation: CreditLineCreation = {mobile: mobile};
    return this.httpService
      .post(EndPoints.CREDIT_LINES, creditLineCreation);
  }
}
