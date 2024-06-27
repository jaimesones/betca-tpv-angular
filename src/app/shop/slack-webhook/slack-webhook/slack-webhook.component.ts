import {Component} from '@angular/core';
import {SlackPublication} from "../slack-publication.model";
import {SlackPublicationCategory} from "../slack-publication-category.model";
import {SlackWebhookService} from "../../shared/services/slack-webhook.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {SharedCashierService} from "../../shared/services/shared.cashier.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-slack-webhook',
  templateUrl: './slack-webhook.component.html',
  styleUrls: ['./slack-webhook.component.css']
})
export class SlackWebhookComponent {

  slackPublication: SlackPublication;
  slackPublicationCategories = [SlackPublicationCategory.INFO, SlackPublicationCategory.WARNING,
                                SlackPublicationCategory.ERROR, SlackPublicationCategory.CRITICAL];
  slackPublicationCategoriesText = ["INFO", "WARNING", "ERROR", "CRITICAL"];

  constructor(private slackWebhookService : SlackWebhookService, private snackBar : MatSnackBar,
              private router : Router, private sharedCashierService : SharedCashierService) {
    this.slackPublication = new SlackPublication();
  }

  publish(): void {
    this.slackWebhookService
      .publish(this.slackPublication)
      .subscribe(() => {
        this.snackBar.open('Message published successfully on Slack', 'Success', {duration: 5000});
        this.sharedCashierService.readLast()
          .pipe(
            map(cashier => cashier.closed)
          )
          .subscribe(
            closed => {
              if (closed) {
                this.router.navigate(['shop', 'cashier-closed']).then();
              } else {
                this.router.navigate(['shop', 'cashier-opened']).then();
              }
            }
          );
      });
  }

}
