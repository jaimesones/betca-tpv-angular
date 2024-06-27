import {Observable} from "rxjs";
import {StockAudit} from "./stock-audit.model";
import {Injectable} from "@angular/core";
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";


@Injectable({
  providedIn: 'root',
})

export class StockAuditServices {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(stockAudit:StockAudit):Observable<StockAudit>{
    return this.httpService
      .post(EndPoints.STOCK_AUDIT,stockAudit)

  }
  read(id:string): Observable<StockAudit> {
    return this.httpService.get(EndPoints.STOCK_AUDIT+ '/'+id)
  }
  show(): Observable<StockAudit[]> {
    return this.httpService
      .get(EndPoints.STOCK_AUDIT+StockAuditServices.SEARCH);
  }
  update(oldId: string, stock: StockAudit) : Observable<StockAudit>  {
    return this.httpService.successful()
      .put(EndPoints.STOCK_AUDIT+"/"+oldId,stock)
  }
}

