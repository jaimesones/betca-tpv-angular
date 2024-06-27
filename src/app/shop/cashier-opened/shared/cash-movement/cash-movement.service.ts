import {Injectable} from '@angular/core';
import {CashMovement} from "./cash-movement.model";
import {Observable} from "rxjs";
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";

@Injectable({
  providedIn: 'root'
})
export class CashMovementService {

  static CASH_MOVEMENT = EndPoints.CASHIERS + '/cash-movement';

  constructor(private httpService: HttpService) {
  }

  create(cashMovement: CashMovement): Observable<CashMovement> {
    return this.httpService.patch(CashMovementService.CASH_MOVEMENT, cashMovement);
  }
}
