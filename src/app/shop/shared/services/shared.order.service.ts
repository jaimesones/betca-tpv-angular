import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SharedOrderService {
  private static REFERENCE = "/reference";

  constructor(private httpService: HttpService) {
  }

  searchOrders(order: string): Observable<string[]> {
    return this.httpService
      .param('orderReference', order)
      .get(EndPoints.ORDERS + SharedOrderService.REFERENCE)
      .pipe(
        map(response => response.references)
      );
  }
}
