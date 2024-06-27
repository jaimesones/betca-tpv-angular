import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import {ArticleSizeFamily} from "./article-size-family.model";
import { Tax } from '../shared/services/models/Tax';
import { ArticlesSizeFamilyCreationService } from './articles-size-family-creation.service';


@Component({
  selector: 'app-articles-size-family-creation',
  templateUrl: './articles-size-family-creation-dialog.component.html',
  styleUrls: ['./articles-size-family-creation-dialog.component.css'],
})

export class ArticlesSizeFamilyCreationDialogComponent implements OnInit {
  taxValues = Object.keys(Tax).filter((key) => isNaN(Number(key)));
  articleSizeFamily: ArticleSizeFamily;
  companies: Observable<string[]> = of([]);

  constructor(
    @Inject(MAT_DIALOG_DATA) data: ArticleSizeFamily,
    private articleSizeFamilyCreationService: ArticlesSizeFamilyCreationService,
    private dialog: MatDialog) {

    this.articleSizeFamily = data ? data : {
      barcode: undefined,
      description: undefined,
      retailPrice: undefined,
      providerCompany: undefined,
      tax: Tax.GENERAL,
      size: undefined,
      nums: []
    };
    let rand = parseInt(Math.random()*999999+"")+"";
    let length = rand.length;
    for(let i=0;i<6-length;i++){
      rand = "0"+rand;
    }
    this.articleSizeFamily.barcode ="8400000"+ rand;
  }

  form = {
    addNumber: 1,
    min: 0,
    max: 60,
    selectSize:"",
    letterMin: 'XSS',
    letterMax: 'Especial',
  };
  letterOptions = ['XSS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Especial'];
  ngOnInit(): void {}

  create(): void {
    let as = [];
    for(let i=this.form.min;i<this.form.max;i++){
      let v:any = this.form.min*this.form.addNumber;
      as.push(v);
    }

    console.log("articleSizeFamily",this.articleSizeFamily);
    this.articleSizeFamily.nums = as;
    this.articleSizeFamilyCreationService
      .create(this.articleSizeFamily)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    console.log("articleSizeFamily",this.articleSizeFamily);

    return this.check(this.articleSizeFamily.barcode) || this.check(this.articleSizeFamily.description)
      || this.check(this.articleSizeFamily.providerCompany)
      || (this.articleSizeFamily.retailPrice === undefined || null)
    // || (this.form.selectSize==="") || (this.form.selectSize==="2" && this.check(this.articleSizeFamily.size));
  }
  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}

