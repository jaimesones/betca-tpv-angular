import {CreditSale} from "./credit-sale.model";

export interface CreditLine {
  mobile: string;
  creationDate?: Date;
  sales?: CreditSale[];
}
