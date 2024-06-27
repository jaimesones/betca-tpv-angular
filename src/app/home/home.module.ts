import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ShoppingBasketService} from './shopping-basket/shopping-basket.service';
import {ComplaintCreationUpdatingDialogComponent} from './complaints/complaint-creation-updating-dialog.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {AdviserComponent} from './adviser/adviser.component';
import {ShoppingBasketComponent} from "./shopping-basket/shopping-basket.component";
import { OnlineOrdersComponent } from './online-orders/online-orders.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';
import { TechnicalSupportCreationUpdatingDialogComponent } from './technical-support/technical-support-creation-updating-dialog.component';
import { CustomerPointsComponent } from './customer-points/customer-points.component';
import {PayDialogComponent} from "./shopping-basket/pay-dialog.component";
import { ReviewsComponent } from './reviews/reviews.component';
import { IconButtonComponent } from './reviews/icon-button/icon-button.component';
import { ScoreBarComponent } from './reviews/score-bar/score-bar.component';


@NgModule({
  declarations: [
    AdviserComponent,
    ComplaintsComponent,
    ComplaintCreationUpdatingDialogComponent,
    HomeComponent,
    ShoppingBasketComponent,
    OnlineOrdersComponent,
    TechnicalSupportComponent,
    TechnicalSupportCreationUpdatingDialogComponent,
    CustomerPointsComponent,
    PayDialogComponent,
    ReviewsComponent,
    IconButtonComponent,
    ScoreBarComponent,
  ],
  entryComponents: [
    ComplaintCreationUpdatingDialogComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [
    ShoppingBasketService,
  ]
})
export class HomeModule {

}
