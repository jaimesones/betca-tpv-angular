import {Component} from '@angular/core';
import {of} from 'rxjs';

import {ArticleService} from '../shared/services/article.service';
import {ArticleSearch} from '../shared/services/models/article-search.model';
import {DatePipe} from "@angular/common";
import {TicketService} from "../shared/services/ticket.service";

@Component({
  templateUrl: 'stock-manager.component.html'
})
export class StockManagerComponent {
  barcode: string;
  articleSearch: ArticleSearch;
  title = 'Stock management';
  articles = of([])
  fromDate : Date;
  untilDate : Date;

  constructor(private articleService: ArticleService,
    private ticketService: TicketService, public datepipe: DatePipe) {
    this.resetSearch();
  }

  search(): void {
    delete this.fromDate;
    delete this.untilDate;
    delete this.articleSearch.barcode;
    this.articles = this.articleService.search(this.articleSearch);
  }

  searchByDate(): void {
    this.resetSearch();
    this.articleSearch.fromDate = this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');
    this.articleSearch.untilDate = this.datepipe.transform(this.untilDate, 'yyyy-MM-dd');
    this.articles = this.ticketService.searchByDate(this.articleSearch);
  }

  searchForPrediction(): void {
    delete this.fromDate;
    delete this.untilDate;
    delete this.articleSearch.stock;
    this.articles = this.ticketService.searchForPrediction(this.articleSearch);
  }

  resetSearch(): void {
    this.articleSearch = {};
  }

  unfinished(): void {
    this.articles = this.articleService.searchUnfinished();
  }

}
