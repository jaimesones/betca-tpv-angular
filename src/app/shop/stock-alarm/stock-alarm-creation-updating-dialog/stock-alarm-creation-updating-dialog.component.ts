import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StockAlarm} from "../models/stock-alarm.model";
import {StockAlarmService} from "../services/stock-alarm.service";
import {of} from "rxjs";
import {
  StockAlarmLineCreationUpdatingDialogComponent
} from "./stock-alarm-line-creation-updating-dialog/stock-alarm-line-creation-updating-dialog.component";

@Component({
  selector: 'app-stock-alarm-creation-updating-dialog',
  templateUrl: './stock-alarm-creation-updating-dialog.component.html',
  styleUrls: ['./stock-alarm-creation-updating-dialog.component.css']
})
export class StockAlarmCreationUpdatingDialogComponent {
  stockAlarm: StockAlarm;
  title: string;
  titleLine: string = "Stock Alarm Line";
  oldName: string;
  stockAlarmLines = of([]);

  constructor(@Inject(MAT_DIALOG_DATA) data: StockAlarm, private stockAlarmService: StockAlarmService, private dialog: MatDialog) {
    this.title = data ? 'Update Stock Alarm' : 'Create Stock Alarm';
    this.stockAlarm = data ? data : {
      name: undefined,
      description: undefined,
      warning: undefined,
      critical: undefined,
      stockAlarmLines: undefined
    };
  }

  create(): void {
    this.dialog.open(StockAlarmLineCreationUpdatingDialogComponent);
  }

  update(): void {
    this.stockAlarmService
      .update(this.oldName, this.stockAlarm)
      .subscribe(() => this.dialog.closeAll());
  }

  isCreate(): boolean {
    return this.oldName === undefined;
  }

  invalid(): boolean {
    return this.check(this.stockAlarm.name) || this.check(this.stockAlarm.description);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }


}
