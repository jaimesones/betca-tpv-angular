export interface Invoice {
  identity: number;
  creationDate?: Date;
  baseTax?: number;
  taxValue?: number;
  userMobile: string;
  ticketId: string;
}
