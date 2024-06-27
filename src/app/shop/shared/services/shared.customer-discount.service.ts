import {CustomerDiscountModel} from "../../customer-discount/customer-discount.model";
import {Observable, of} from "rxjs";
import {CustomerDiscountSearch} from "../../customer-discount/customer-discount-search";
import {HttpService} from "@core/http.service";
import {Injectable} from "@angular/core";
import {EndPoints} from "@shared/end-points";

@Injectable({
  providedIn: 'root',
})
export class CustomerDiscountService{

  constructor(private httpService: HttpService) {}

  create(customerDiscount:CustomerDiscountModel): Observable<CustomerDiscountModel> {
    return this.httpService
      .successful()
      .post(EndPoints.CUSTOMER_DISCOUNTS, customerDiscount);
  }

  read(mobile:number):Observable<CustomerDiscountModel> {
    return this.httpService
      .get(EndPoints.CUSTOMER_DISCOUNTS + '/' + mobile);
  }

  search(customerDiscountSearch: CustomerDiscountSearch):Observable<CustomerDiscountModel[]>{
    return this.httpService
      .paramsFrom(customerDiscountSearch)
      .get(EndPoints.CUSTOMER_DISCOUNTS);
  }

  update(mobile:number, customerDiscountModel:CustomerDiscountModel):Observable<CustomerDiscountModel>{
    return this.httpService
      .successful()
      .put(EndPoints.CUSTOMER_DISCOUNTS + '/' + mobile, customerDiscountModel);
  }

  delete(mobile:number):Observable<void>{
    return this.httpService
      .successful()
      .delete(EndPoints.CUSTOMER_DISCOUNTS + '/' + mobile);
  }
}
