import {Tax} from '../shared/services/models/Tax';

export interface ArticleSizeFamily {
  barcode: string;
  description: string;
  retailPrice: number;
  providerCompany: string;
  reference?: string;
  tax?: Tax;
  size: string;
  nums: Array<any>;
}
