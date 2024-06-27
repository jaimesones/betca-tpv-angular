import {OfferArticle} from "./offerArticle.model";

export interface Offer {
  reference: number;
  description?: string;
  creationDate?: Date;
  expiryDate?: Date;
  discount: number;
  offerArticles: OfferArticle[];
}
