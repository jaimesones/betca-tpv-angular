import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';
import {AdviserComponent} from './adviser/adviser.component';
import {ComplaintsComponent} from './complaints/complaints.component';
import {HomeComponent} from './home.component';
import {ShoppingBasketComponent} from "./shopping-basket/shopping-basket.component";
import {OnlineOrdersComponent} from "./online-orders/online-orders.component";
import {TechnicalSupportComponent} from "./technical-support/technical-support.component";
import {CustomerPointsComponent} from "./customer-points/customer-points.component";
import {ReviewsComponent} from "./reviews/reviews.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'adviser', component: AdviserComponent}, // public
      {
        path: 'complaints',
        component: ComplaintsComponent,
        canActivate: [RoleGuardService],
        data: {roles: [Role.CUSTOMER]}
      },
      {
        path: 'shopping-basket',
        component: ShoppingBasketComponent,
        canActivate: [RoleGuardService],
        data: {roles: [Role.CUSTOMER]}
      },
      {path: 'online-orders', component: OnlineOrdersComponent},
      {path: 'technical-support', component: TechnicalSupportComponent},
      {path: 'customer-points', component: CustomerPointsComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
