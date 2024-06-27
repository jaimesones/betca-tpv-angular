import {environment} from '@env';

export class EndPoints {
  static PROVIDERS = environment.REST_CORE + '/providers';
  static ARTICLES = environment.REST_CORE + '/articles';
  static CASHIERS = environment.REST_CORE + '/cashiers';
  static CASHIERS_LAST = EndPoints.CASHIERS + '/last';
  static CREDIT_LINES = environment.REST_CORE + '/credit-lines'
  static TICKETS = environment.REST_CORE + '/tickets';
  static COMPLAINTS = environment.REST_CUSTOMER_SUPPORT + '/complaints';
  static SLACK = environment.REST_CORE + '/slack';
  static USERS = environment.REST_USER + '/users';
  static INVOICES = environment.REST_CORE + '/invoices';
  static PROVIDER_INVOICES = environment.REST_CORE + '/provider-invoices';
  static ARTICLES_FAMILY = environment.REST_CORE + '/articles-family';
  static TECHNICAL_SUPPORT_REQUESTS = environment.REST_CORE + '/technical-support-requests';
  static MESSENGERS = environment.REST_CORE + '/messengers';
  static ORDERS = environment.REST_CORE + '/orders';
  static STOCK_AUDIT= environment.REST_CORE + '/stock-audit';
  static CUSTOMER_DISCOUNTS = environment.REST_CORE + '/customer_discounts';
  static CUSTOMER_POINTS = environment.REST_CORE + '/customer-points';
  static SHOPPING_CART = environment.REST_CORE + '/shopping-cart';
}
