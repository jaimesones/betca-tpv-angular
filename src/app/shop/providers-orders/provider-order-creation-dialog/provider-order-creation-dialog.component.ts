import {Component, Inject, OnInit} from '@angular/core';
import {ProviderOrder} from "../provider-order.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ProviderOrderService} from "../provider-order.service";

import { Article } from "../../shared/services/models/article.model";
import {Observable, of} from "rxjs";
import {ArticleService} from "../../shared/services/article.service";
import {Tax} from "../../shared/services/models/Tax";

@Component({
  selector: 'app-provider-order-creation-dialog',
  templateUrl: './provider-order-creation-dialog.component.html',
  styleUrls: ['./provider-order-creation-dialog.component.css']
})
export class ProviderOrderCreationDialogComponent implements OnInit {
  providerOrder: ProviderOrder;
  title: string;
  oldProvider: string;
  // companyValues = Object.keys(Article).filter(key => key.providerCompany);
  article: Article;
  taxValues = Object.keys(Tax).filter(key => isNaN(Number(key)));
  oldBarcode: string;
  companies: Observable<string[]> = of([]);

  ngOnInit(): void {
  }

  constructor(@Inject(MAT_DIALOG_DATA) data: Article, private articleService: ArticleService, private dialog: MatDialog) {
    this.title = 'Create Provider Order';
    this.article = {
      barcode: undefined, description: undefined, retailPrice: undefined, providerCompany: undefined,
      discontinued: false, tax: Tax.GENERAL, stock: 10
    };
    this.oldBarcode = data ? data.barcode : undefined;
  }

  isCreate(): boolean {
    return this.oldBarcode === undefined;
  }

  create(): void {
    this.articleService
      .create(this.article)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void {
    this.articleService
      .update(this.oldBarcode, this.article)
      .subscribe(() => this.dialog.closeAll());
  }


  invalid(): boolean {
    return this.check(this.article.barcode) || this.check(this.article.description) || this.check(this.article.providerCompany)
      || (this.article.retailPrice === undefined || null);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
