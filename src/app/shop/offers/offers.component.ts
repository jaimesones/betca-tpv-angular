import { Component } from '@angular/core';
import {of} from "rxjs";
import {OfferSearch} from "./offer-search.model";
import {OfferService} from "./offer.service";
import {Offer} from "./offer.model";
import {MatDialog} from "@angular/material/dialog";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {OfferCreationUpdatingDialogComponent} from "./offer-creation-updating-dialog.component";


@Component({
  templateUrl: 'offers.component.html',
})
export class OffersComponent {
  reference: number;
  offerSearch: OfferSearch;
  offers = of([]);
  title = "Offers Management";

  constructor(private dialog: MatDialog, private offerService: OfferService) {
    this.resetSearch();
  }

  resetSearch(): void {
    this.offerSearch = {};
  }

  search(): void {
    this.offers = this.offerService.search(this.offerSearch);
  }

  create(): void {
    this.dialog.open(OfferCreationUpdatingDialogComponent);
  }

  read(offer: Offer) {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Offer Details',
        object: this.offerService.read(offer.reference)
      }});
  }

  update(offer: Offer) {
    this.offerService.read(offer.reference)
      .subscribe(reference => this.dialog.open(OfferCreationUpdatingDialogComponent, {data: reference}));
  }
}
