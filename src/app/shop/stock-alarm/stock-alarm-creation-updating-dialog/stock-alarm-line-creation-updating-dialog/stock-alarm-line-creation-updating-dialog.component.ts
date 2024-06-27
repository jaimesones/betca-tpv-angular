import {Component} from '@angular/core';
import {StockAlarmLine} from "../../models/stock-alarm-line.model";
import {MatDialog} from "@angular/material/dialog";
import {StockAlarmLineService} from "../../services/stock-alarm-line.service";
import {Article} from "../../../shared/services/models/article.model";

@Component({
  selector: 'app-stock-alarm-line-creation-updating-dialog',
  templateUrl: './stock-alarm-line-creation-updating-dialog.component.html',
  styleUrls: ['./stock-alarm-line-creation-updating-dialog.component.css']
})
export class StockAlarmLineCreationUpdatingDialogComponent {
  stockAlarmLine: StockAlarmLine;
  title: string;
  oldBarcode: string;
  barcode: string = '';
  article: Article;

  constructor(private stockAlarmLineService: StockAlarmLineService, private dialog: MatDialog) {
    this.stockAlarmLine = {
      article: undefined
    };
  }

  create() {
    this.stockAlarmLineService
      .create(this.stockAlarmLine)
      .subscribe(() => this.dialog.closeAll());
  }

  update() {
    this.stockAlarmLineService
      .update(this.oldBarcode, this.stockAlarmLine)
      .subscribe(() => this.dialog.closeAll());
  }

  search() {
    this.stockAlarmLineService.search(this.barcode).subscribe(
      article => this.article = article
    )
  }

  invalid() {
    return this.check(this.article?.barcode)
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
