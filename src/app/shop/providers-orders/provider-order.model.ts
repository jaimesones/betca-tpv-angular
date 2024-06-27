export interface ProviderOrder {
  reference: string,
  description?: string,
  company: string,
  openingDate: Date,
  closingDate?: Date,
  orderLines: [],
  active? : boolean
}
