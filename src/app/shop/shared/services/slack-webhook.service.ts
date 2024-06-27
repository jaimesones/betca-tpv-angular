import { Injectable } from '@angular/core';
import {HttpService} from "@core/http.service";
import {SlackPublication} from "../../slack-webhook/slack-publication.model";
import {EndPoints} from "@shared/end-points";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SlackWebhookService {

  constructor(private httpService : HttpService) { }

  publish(slackPublication : SlackPublication) : Observable<any> {
    return this.httpService.post(EndPoints.SLACK, slackPublication);
  }
}
