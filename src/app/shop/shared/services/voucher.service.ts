import {Injectable} from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoucherService {

  createAndPrintVoucher(value: number): Observable<any> {
    return EMPTY; // TODO create and print voucher
  }

  searchAllReferences(): Observable<string[]> {
    return of(["aa69f", "aa69g"]);
  }
}
