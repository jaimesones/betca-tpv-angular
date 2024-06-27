import {Injectable} from "@angular/core";
import {HttpService} from "@core/http.service";
import {Observable, of} from "rxjs";
import {EndPoints} from "@shared/end-points";
import {User} from "../models/user.models";

@Injectable({
  providedIn: 'root',
})
export class SharedUserService {

  constructor(private httpService: HttpService) {
  }

  read(mobile: number): Observable<User> {
    return this.httpService
      .get(EndPoints.USERS + '/' + mobile);
  }

  searchMobiles(mobile: string): Observable<string[]> {
    return of(['6','666000222','666000333']);
  }
}
