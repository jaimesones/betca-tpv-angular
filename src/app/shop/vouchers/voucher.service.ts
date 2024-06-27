import {Voucher} from "../shared/models/voucher.model";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  create(voucher:Voucher): Observable<Voucher>{
    return of(voucher);
  }

  searchAll(): Observable<Voucher[]>{
    return of([
      {reference:"aa69f", value:10, userPhone:611111, creationDate:new Date(), dateOfUse:null, consumed:null},
      {reference:"aa69g", value:25.30, userPhone:611112, creationDate:new Date(), dateOfUse:null, consumed:null}
    ]);
  }

  searchAllReferences(): Observable<string[]> {
    return of(["aa69f", "aa69g"]);
  }
}
