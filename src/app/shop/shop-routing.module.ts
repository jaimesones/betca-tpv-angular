import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Role} from '@core/role.model';
import {RoleGuardService} from '@core/role-guard.service';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {CreditLineComponent} from "./credit-line/credit-line.component";
import {ProvidersComponent} from './providers/providers.component';
import {ShopComponent} from './shop.component';
import {TicketsComponent} from './cashier-opened/tickets/tickets.component';
import {InvoicesComponent} from "./invoices/invoices.component";
import {OffersComponent} from "./offers/offers.component";
import {CustomerDiscountComponent} from "./customer-discount/customer-discount.component";
import {VouchersComponent} from "./vouchers/vouchers.component";
import { ProviderInvoicesComponent } from "./provider-invoices/provider-invoices.component";
import {OnlineOrdersComponent} from "./online-orders/online-orders.component";
import {SlackWebhookComponent} from "./slack-webhook/slack-webhook/slack-webhook.component";
import {CashierClosuresManagementComponent} from "./cashier-closures-management/cashier-closures-management.component";
import {StockAuditComponent} from "./stock-audit/stock-audit.component";
import {StockManagerComponent} from './stock-manager/stock-manager.component';
import {ArticlesSizeFamilyCreationDialogComponent} from "./articles-size-family-creation/articles-size-family-creation-dialog.component";
import {ProvidersOrdersComponent} from "./providers-orders/providers-orders.component";
import { BudgetsComponent } from './budgets/budgets.component';
import {GithubIssuesComponent} from "./github-issues/github-issues.component";
import {TechnicalSupportEmployeeComponent} from "./technical-support-employee/technical-support-employee.component";
import {StockAlarmComponent} from "./stock-alarm/stock-alarm.component";
import {MessengersComponent} from "./messengers/messengers.component";
import {ComplaintsComponent} from "./complaints/complaints.component";

const routes: Routes = [
  {
    path: '', // 'shop' to forRoot
    component: ShopComponent,
    canActivate: [RoleGuardService],
    data: {roles: [Role.ADMIN, Role.MANAGER, Role.OPERATOR]},
    children: [ // or path: 'shop/articles'
      {path: 'articles', component: ArticlesComponent},
      {path: 'cashier-closed', component: CashierClosedComponent},
      {path: 'cashier-opened', component: CashierOpenedComponent},
      {path: 'credit-line', component: CreditLineComponent},
      {path: 'providers', component: ProvidersComponent},
      {path: 'tickets', component: TicketsComponent},
      {path: 'invoices', component: InvoicesComponent},
      {path: 'offers', component: OffersComponent},
      {path: 'customer-discount', component: CustomerDiscountComponent},
      {path: 'vouchers', component: VouchersComponent},
      {path: 'provider-invoices', component: ProviderInvoicesComponent},
      {path: 'online-orders', component: OnlineOrdersComponent},
      {path: 'slack-webhook', component: SlackWebhookComponent},
      {path: 'cashier-closures-management', component: CashierClosuresManagementComponent},
      {path:'stock-audit',component:StockAuditComponent},
      {path:'stock-manager',component:StockManagerComponent},
      {path:'articles-size-family-creation',component:ArticlesSizeFamilyCreationDialogComponent},
      { path: 'providers-orders', component: ProvidersOrdersComponent },
      {path: 'budgets', component: BudgetsComponent},
      {path:'github-issues',component:GithubIssuesComponent},
      {path:'technical-support',component:TechnicalSupportEmployeeComponent},
      {path:'stock-alarm',component:StockAlarmComponent},
      {path: 'complaints', component: ComplaintsComponent},
      {path:'messengers',component:MessengersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
