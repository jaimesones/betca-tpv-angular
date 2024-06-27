import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Offer} from "./offer.model";
import {OfferService} from "./offer.service";
import {of} from "rxjs";

@Component({
  templateUrl: 'offer-creation-updating-dialog.component.html',
  styleUrls: ['offer-creation-updating-dialog.component.css']
})
export class OfferCreationUpdatingDialogComponent {
  title: string;
  titleArticles: string;
  addOfferArticle: string;
  offerArticles = of([]);
  oldReference: number;
  offer: Offer;

  constructor(@Inject(MAT_DIALOG_DATA) data: Offer, private offerService: OfferService, private dialog: MatDialog) {
    this.title = data ? 'Update Offer' : 'Create Offer';
    this.title = data ? 'Update Article' : 'Create Offer';
    //TODO: Cambiar por metodo real para obtener los articulos de la oferta.
    this.offerArticles = of([
      {barcode:"200", description: "Product 1"},
      {barcode:"201", description: "Product 2"},
      {barcode:"202", description: "Product 3"},
    ])
    this.offer = data ? data : {
      reference: undefined, discount: undefined, offerArticles: undefined
    }
    this.oldReference = data ? data.reference : undefined;
  }

  create(): void {
    this.dialog.closeAll();
  }

  createOfferArticle(): void {
    this.dialog.closeAll();
  }

  update(): void {
    this.dialog.closeAll();
  }

  isCreate(): boolean {
    return this.oldReference === undefined;
  }

  invalid(): boolean {
    return false;
  }

  addArticle() {
    this.dialog.closeAll();
  }
}
