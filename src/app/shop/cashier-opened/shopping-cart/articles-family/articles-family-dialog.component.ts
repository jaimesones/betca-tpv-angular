import {Component, Inject, OnInit} from '@angular/core';
import { Article } from 'app/shop/shared/services/models/article.model';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SharedArticleService} from "../../../shared/services/shared.article.service";
import {Observable} from "rxjs";
import {ArticlesTree} from "./articlesTree.model";
import {ArticlesFamilyService} from "./articlesFamily.service";

@Component({
  selector: 'app-articles-family-dialog',
  templateUrl: './articles-family-dialog.component.html',
  styleUrls: ['./articles-family-dialog.component.css']
})
export class ArticlesFamilyDialogComponent implements OnInit {
  articles: Observable<ArticlesTree[]>;

  constructor(private dialogRef: MatDialogRef<ArticlesFamilyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public reference:string ,
              private articlesFamilyServices: ArticlesFamilyService)
  {
    this.articles = this.articlesFamilyServices.readArticlesTree(reference);
  }

  items = [
    {
      title: 'Fam 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Vestibulum blandit lectus lectus, accumsan elementum nunc ullamcorper sed.',
      type: 'ARTICLES',
    },
    {
      title: 'Fam 2',
      description: 'Lorem ipsum dolor sit amet. ' +
        'Vestibulum blandit lectus lectus.',
      type: 'ARTICLES'
    },
    {
      title: 'Size fam 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      price: '14',
      type: 'SIZES'
    },
    {
      title: 'Size fam 2',
      description: 'Lorem ipsum dolor sit amet.',
      price: '32',
      type: 'SIZES'
    },
    {
      title: 'Article 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Vestibulum blandit lectus lectus.',
      price: '26',
      stock: '11',
      type: 'ARTICLE'
    },
  ];

  ngOnInit(): void {
  }
}
