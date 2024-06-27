export interface ProviderInvoice {
  identity: string;
  creationDate: Date;
  baseTax: number;
  textValue: number;
  providerCompany: string;
  orderReference: string;
}
