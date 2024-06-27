import {Component} from '@angular/core';
import {of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {StockAlarmService} from "./services/stock-alarm.service";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {StockAlarm} from "./models/stock-alarm.model";
import {StockAlarmSearch} from "./models/stock-alarm-search.model";
import {
  StockAlarmCreationUpdatingDialogComponent
} from "./stock-alarm-creation-updating-dialog/stock-alarm-creation-updating-dialog.component";

@Component({
  selector: 'app-stock-alarm',
  templateUrl: './stock-alarm.component.html',
  styleUrls: ['./stock-alarm.component.css']
})
export class StockAlarmComponent {
  title = 'Stock Alarms';
  stockAlarms = of([]);
  stockAlarmSearch: StockAlarmSearch;

  constructor(private dialog: MatDialog, private stockAlarmService: StockAlarmService) {
    this.resetSearch();
  }

  search(): void {
    this.stockAlarms = this.stockAlarmService.search(this.stockAlarmSearch);
  }

  resetSearch(): void {
    this.stockAlarmSearch = {};
  }

  read(stockAlarm: StockAlarm): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Stock Alarm Details',
        object: this.stockAlarmService.read(stockAlarm.name)
      }
    });
  }

  create(): void {
    this.dialog.open(StockAlarmCreationUpdatingDialogComponent);
  }

  update(stockAlarm: StockAlarm): void {
    this.stockAlarmService.read(stockAlarm.name)
      .subscribe(fullStockAlarm => this.dialog.open(StockAlarmCreationUpdatingDialogComponent, {data: fullStockAlarm}));
  }
}
