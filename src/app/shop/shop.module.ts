import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';

import {CashierClosureService} from './cashier-opened/cashier-closure/cashier-closure.service';
import {ProviderService} from './providers/provider.service';
import {SharedArticleService} from './shared/services/shared.article.service';
import {SharedCashierService} from './shared/services/shared.cashier.service';
import {SharedProviderService} from './shared/services/shared.provider.service';
import {ShoppingCartService} from './cashier-opened/shopping-cart/shopping-cart.service';
import {ArticlesComponent} from './articles/articles.component';
import {CashierClosedComponent} from './cashier-closed/cashier-closed.component';
import {CashierOpenedComponent} from './cashier-opened/cashier-opened.component';
import {ShopComponent} from './shop.component';
import {ProvidersComponent} from './providers/providers.component';
import {SearchByBarcodeComponent} from './shared/search-by-barcode.component';
import {SearchByCompanyComponent} from './shared/search-by-company.component';
import {ShoppingCartComponent} from './cashier-opened/shopping-cart/shopping-cart.component';
import {ArticleCreationUpdatingDialogComponent} from './articles/article-creation-updating-dialog.component';
import {
  ArticleQuickCreationDialogComponent
} from './cashier-opened/shopping-cart/article-quick-creation-dialog.component';
import {CashierDialogComponent} from './cashier-opened/cashier-closure/cashier-dialog.component';
import {CheckOutDialogComponent} from './cashier-opened/shopping-cart/check-out-dialog.component';
import {ProviderCreationUpdatingDialogComponent} from './providers/provider-creation-updating-dialog.component';
import {ArticleService} from './shared/services/article.service';
import {ShopRoutingModule} from './shop-routing.module';
import {TicketsComponent} from './cashier-opened/tickets/tickets.component';
import {InvoicesComponent} from './invoices/invoices.component';
import {CustomerDiscountService} from "./shared/services/shared.customer-discount.service";
import {CashMovementDialogComponent} from './cashier-opened/shared/cash-movement/cash-movement-dialog.component';
import {OffersComponent} from "./offers/offers.component";
import {CustomerDiscountComponent} from './customer-discount/customer-discount.component';
import {ArticlesFamilyDialogComponent} from "./cashier-opened/shopping-cart/articles-family/articles-family-dialog.component";
import {VouchersComponent} from "./vouchers/vouchers.component";
import {ProviderInvoicesComponent} from "./provider-invoices/provider-invoices.component";
import {OnlineOrdersComponent} from './online-orders/online-orders.component';
import {SharedInvoiceService} from "./shared/services/shared.invoice.service";
import {CreditLineComponent} from "./credit-line/credit-line.component";
import { SlackWebhookComponent } from './slack-webhook/slack-webhook/slack-webhook.component';
import {CashierClosuresManagementComponent} from './cashier-closures-management/cashier-closures-management.component';
import {InvoiceCreationUpdatingDialogComponent} from './invoices/invoice-creation-updating-dialog.component';
import {StockAuditComponent} from "./stock-audit/stock-audit.component";
import { CustomerDiscountCreationUpdatingDialogComponent } from './customer-discount/customer-discount-creation-updating-dialog.component';
import {ArticlesCardComponent} from "./cashier-opened/shopping-cart/articles-family/articles-card.component";
import {ArticleCardComponent} from "./cashier-opened/shopping-cart/articles-family/article-card.component";
import {ArticleSizesFamilyCardComponent} from "./cashier-opened/shopping-cart/articles-family/sizes-family-card.component";
import {CreateVoucherDialogComponent} from "./vouchers/dialogs/create-voucher-dialog.component";
import {ProviderInvoiceService} from "./provider-invoices/provider-invoice.service";
import {
  ProviderInvoiceCreationUpdatingDialogComponent
} from "./provider-invoices/provider-invoice-creation-updating-dialog.component";
import {SearchByOrderReferenceComponent} from "./shared/search-by-order-reference.component";
import {SharedOrderService} from "./shared/services/shared.order.service";
import {CreditLineCreationUpdatingDialogComponent} from "./credit-line/credit-line-creation-updating-dialog.component";
import {CreditLineService} from "./credit-line/credit-line.service";
import { StockManagerComponent } from './stock-manager/stock-manager.component';
import { ViewStockComponent } from './stock-manager/view-stock.component';
import {ConsumeVoucherDialogComponent} from "./cashier-opened/shopping-cart/consume-voucher-dialog.component";
import { OfferCreationUpdatingDialogComponent } from "./offers/offer-creation-updating-dialog.component"
import { OfferService } from "./offers/offer.service";
import {SearchByMobileComponent} from './shared/search-by-mobile.component';
import {SharedUserService} from "./shared/services/shared.user.service";
import {ArticlesSizeFamilyCreationDialogComponent} from "./articles-size-family-creation/articles-size-family-creation-dialog.component";
import {CustomerDiscountDialogComponent} from "./cashier-opened/shopping-cart/customer-discount-dialog.component";
import {StockAuditCreationUpdatingDialogComponent} from "./stock-audit/stock-audit-creation-updating-dialog.component";
import {ProvidersOrdersComponent} from "./providers-orders/providers-orders.component";
import {ProviderOrderCreationDialogComponent} from "./providers-orders/provider-order-creation-dialog/provider-order-creation-dialog.component";
import {BudgetsComponent} from "./budgets/budgets.component";
import {TechnicalSupportEmployeeComponent} from "./technical-support-employee/technical-support-employee.component";
import {GithubIssuesComponent} from "./github-issues/github-issues.component";
import {TechnicalSupportEmployeeUpdatingDialogComponent} from "./technical-support-employee/technical-support-employee-updating-dialog.component";
import {ProviderOrderUpdatingDialogComponent} from "./providers-orders/provider-order-updating-dialog/provider-order-updating-dialog.component";
import {StockAuditServices} from "./stock-audit/stock-audit.services";
import {ProviderOrderService} from "./providers-orders/provider-order.service";
import {GitHubIssueDialogoComponent} from "./github-issues/githubIssue-creation-updating-dialog.component";
import { BudgetDialogComponent } from './budgets/dialogs/budget-dialog/budget-dialog.component';
import { SelectBudgetDialogComponent } from './cashier-opened/shopping-cart/select-budget-dialog.component';
import { SharedBudgetsService } from './shared/services/shared.budgets.service';
import { ProviderOrdersDialogTableComponent } from './providers-orders/provider-orders-dialog-table/provider-orders-dialog-table.component';
import { StockAlarmComponent } from './stock-alarm/stock-alarm.component';
import { MessengersComponent } from './messengers/messengers.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ReplyDialogComponent } from './complaints/reply-dialog/reply-dialog.component';
import {GitHubIssueCreateDialogoComponent} from "./github-issues/githib-issues-creation-dialog";
import {StockAuditDetailDialogComponent} from "./stock-audit/stock-audit-detail-dialog.component";
import { StockAlarmCreationUpdatingDialogComponent } from './stock-alarm/stock-alarm-creation-updating-dialog/stock-alarm-creation-updating-dialog.component';
import {GiftTicketDialogComponent} from "./cashier-opened/shopping-cart/gift-ticket-dialog.component";
import { MessengersCreationDialogComponent } from './messengers/messengers-creation-dialog.component';
import {DatePipe} from "@angular/common";
import { StockAlarmLineCreationUpdatingDialogComponent } from './stock-alarm/stock-alarm-creation-updating-dialog/stock-alarm-line-creation-updating-dialog/stock-alarm-line-creation-updating-dialog.component';
import { MessengerCrudComponent } from './messengers/messenger-crud.component';
@NgModule({
  declarations: [
    ArticleCreationUpdatingDialogComponent,
    ArticleQuickCreationDialogComponent,
    ArticlesComponent,
    ArticlesFamilyDialogComponent,
    ArticlesCardComponent,
    ArticleCardComponent,
    ArticleSizesFamilyCardComponent,
    CashierClosedComponent,
    CashierClosuresManagementComponent,
    CashierDialogComponent,
    CashierOpenedComponent,
    CashMovementDialogComponent,
    CheckOutDialogComponent,
    ConsumeVoucherDialogComponent,
    CreateVoucherDialogComponent,
    CreditLineComponent,
    CreditLineCreationUpdatingDialogComponent,
    CustomerDiscountComponent,
    CustomerDiscountCreationUpdatingDialogComponent,
    ProviderCreationUpdatingDialogComponent,
    ProvidersComponent,
    SearchByBarcodeComponent,
    SearchByMobileComponent,
    SearchByCompanyComponent,
    ShopComponent,
    ShoppingCartComponent,
    CustomerDiscountDialogComponent,
    TicketsComponent,
    InvoicesComponent,
    OffersComponent,
    VouchersComponent,
    ProviderInvoicesComponent,
    OnlineOrdersComponent,
    InvoiceCreationUpdatingDialogComponent,
    SlackWebhookComponent,
    StockAuditComponent,
    StockAuditCreationUpdatingDialogComponent,
    StockAuditDetailDialogComponent,
    ProviderInvoiceCreationUpdatingDialogComponent,
    SearchByOrderReferenceComponent,
    StockManagerComponent,
    ViewStockComponent,
    OfferCreationUpdatingDialogComponent,
    GiftTicketDialogComponent,
    OfferCreationUpdatingDialogComponent,
    ArticlesSizeFamilyCreationDialogComponent,
    ProvidersOrdersComponent,
    ProviderOrderCreationDialogComponent,
    ProviderOrderUpdatingDialogComponent,
    BudgetsComponent,
    BudgetDialogComponent,
    SelectBudgetDialogComponent,
    GithubIssuesComponent,
    TechnicalSupportEmployeeComponent,
    TechnicalSupportEmployeeUpdatingDialogComponent,
    GitHubIssueDialogoComponent,
    StockAlarmComponent,
    MessengersComponent,
    ProviderOrdersDialogTableComponent,
    StockAlarmComponent,
    ComplaintsComponent,
    ReplyDialogComponent,
    GitHubIssueCreateDialogoComponent,
    StockAlarmCreationUpdatingDialogComponent,
    MessengersCreationDialogComponent,
    StockAlarmLineCreationUpdatingDialogComponent,
    MessengerCrudComponent
  ],
  entryComponents: [
    ArticleCreationUpdatingDialogComponent,
    ArticleQuickCreationDialogComponent,
    ArticlesSizeFamilyCreationDialogComponent,
    CashierDialogComponent,
    CashMovementDialogComponent,
    CheckOutDialogComponent,
    CreditLineCreationUpdatingDialogComponent,
    CustomerDiscountCreationUpdatingDialogComponent,
    ProviderCreationUpdatingDialogComponent,
    InvoiceCreationUpdatingDialogComponent,
    ProviderInvoiceCreationUpdatingDialogComponent,
    OfferCreationUpdatingDialogComponent,
    CustomerDiscountDialogComponent,
    GitHubIssueDialogoComponent,
    GitHubIssueCreateDialogoComponent
  ],
  imports: [
    SharedModule,
    ShopRoutingModule,
  ],
  providers: [
    ArticleService,
    CashierClosureService,
    CreditLineService,
    ProviderService,
    SharedArticleService,
    SharedBudgetsService,
    SharedCashierService,
    SharedProviderService,
    SharedUserService,
    ShoppingCartService,
    CustomerDiscountService,
    SharedInvoiceService,
    ProviderInvoiceService,
    SharedOrderService,
    OfferService,
    ProviderOrderService,
    StockAuditServices,
    DatePipe
  ],
})
export class ShopModule {
}
