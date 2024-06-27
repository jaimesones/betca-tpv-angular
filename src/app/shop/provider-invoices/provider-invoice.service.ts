import {map, Observable} from "rxjs";

import {Injectable} from "@angular/core";
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {ProviderInvoiceSearch} from "./provider-invoice-search.model";
import {ProviderInvoice} from "./provider-invoice.model";
import {QuarterOfYear} from "./quarter-of-year";

@Injectable({
  providedIn: 'root'
})
export class ProviderInvoiceService {
  static SEARCH = '/search';
  static CREATION_DATE = '/creation-date';
  static YEARS = '/years';
  static QUARTER_OF_YEAR = '/quarter-of-year';

  constructor(private httpService: HttpService) {
  }

  search(providerInvoiceSearch: ProviderInvoiceSearch): Observable<ProviderInvoice[]> {
    return this.httpService
      .paramsFrom(providerInvoiceSearch)
      .get(EndPoints.PROVIDER_INVOICES + ProviderInvoiceService.SEARCH);
  }

  read(identity: string): Observable<ProviderInvoice> {
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + '/' + identity)
  }

  create(providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    return this.httpService
      .post(EndPoints.PROVIDER_INVOICES, providerInvoice);
  }

  update(identity: string, providerInvoice: ProviderInvoice): Observable<ProviderInvoice> {
    return this.httpService
      .successful()
      .put(EndPoints.PROVIDER_INVOICES + '/' + identity, providerInvoice);
  }

  getTotalForQuarterOfYear(quarterOfYear: QuarterOfYear): Observable<QuarterOfYear> {
    return this.httpService
      .param("year", String(quarterOfYear.year))
      .param("quarter", quarterOfYear.quarter.toString().charAt(1))
      .get(EndPoints.PROVIDER_INVOICES + ProviderInvoiceService.QUARTER_OF_YEAR + ProviderInvoiceService.SEARCH)
  }

  getYearsOfAllCreationDate(): Observable<number[]> {
    return this.httpService
      .get(EndPoints.PROVIDER_INVOICES + ProviderInvoiceService.CREATION_DATE + ProviderInvoiceService.YEARS)
      .pipe(
        map(response => response.years)
      );
  }
}
