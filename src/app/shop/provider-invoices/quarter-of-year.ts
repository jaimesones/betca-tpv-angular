import {Quarter} from "./quarter";

export interface QuarterOfYear {
  quarter: Quarter;
  year: number;
  totalBaseTax?: number;
  totalTaxValue?: number;
}
