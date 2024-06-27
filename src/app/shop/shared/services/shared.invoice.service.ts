import {InvoiceSearch} from "../models/invoice-search.model";
import {Observable} from "rxjs";
import {Invoice} from "../models/invoice.model";
import {EndPoints} from "@shared/end-points";
import {HttpService} from "@core/http.service";
import {Injectable} from "@angular/core";
import {InvoiceCreation} from "../models/invoice-creation.model";

@Injectable({
  providedIn: 'root',
})
export class SharedInvoiceService {

  static SEARCH = '/search';
  static RECEIPT = '/receipt';

  constructor(private httpService: HttpService) {
  }

  search(invoiceSearch: InvoiceSearch): Observable<Invoice[]> {
    return this.httpService
      .paramsFrom(invoiceSearch)
      .get(EndPoints.INVOICES + SharedInvoiceService.SEARCH);
  }

  read(identity: number): Observable<Invoice> {
    return this.httpService.get(EndPoints.INVOICES + '/' + identity);
  }

  create(ticketId: string): Observable<Invoice> {
    let invoiceCreation: InvoiceCreation = {ticketId: ticketId};
    return this.httpService
      .post(EndPoints.INVOICES, invoiceCreation);
  }

  update(oldIdentity: number, invoice: Invoice): Observable<Invoice> {
    return this.httpService
      .successful()
      .put(EndPoints.INVOICES + '/' + oldIdentity, invoice);
  }

  readReceipt(identity: number) {
    return this.httpService.pdf().get(EndPoints.INVOICES + '/' + identity.toString() + SharedInvoiceService.RECEIPT);
  }
}
