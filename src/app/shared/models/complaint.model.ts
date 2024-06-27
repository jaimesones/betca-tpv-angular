export interface Complaint {
  id?: string;
  mobile?: number;
  barcode: string;
  description: string;
  state?: string;
  reply?: string;
  registrationDate?: Date;
}
