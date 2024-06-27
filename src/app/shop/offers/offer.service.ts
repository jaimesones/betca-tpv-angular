import {OfferSearch} from "./offer-search.model";
import {Observable, of} from "rxjs";
import {Offer} from "./offer.model";

export class OfferService {

  search(offerSearch: OfferSearch) : Observable<Offer[]>{
    return of([
      {reference: 1, description: "Offer number 1", creationDate: new Date(), expiryDate: new Date(), discount: 50, offerArticles: [{barcode:"8001", description:"Product description 1"}]},
      {reference: 2, description: "Offer number 2", creationDate: new Date(), expiryDate: new Date(), discount: 75, offerArticles: [{barcode:"8001", description:"Product description 2"},{barcode:"8001", description:"Product description 3"}]},
      {reference: 3, description: "Offer number 3", creationDate: new Date(), expiryDate: new Date(), discount: 30, offerArticles: [{barcode:"8001", description:"Product description 1"}]}
    ]);
  }

  read(reference: number) : Observable<Offer>{
    return of(
      {reference: 4, description: "Test offer", creationDate: new Date(), expiryDate: new Date(), discount: 42, offerArticles: [{barcode:"8001", description:"Product description 1"}]},
    );
  }
}
