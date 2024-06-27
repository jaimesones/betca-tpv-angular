import {Component, Inject} from "@angular/core";
import {StockAudit} from "./stock-audit.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
@Component({

  templateUrl: 'stock-audit-detail-dialog.component.html',
  styleUrls:['stock-audit-detail-dialog.component.css']

})
export class StockAuditDetailDialogComponent{
  stock:StockAudit;
  title:string;
  constructor(@Inject(MAT_DIALOG_DATA)data:StockAudit ,private dialog:MatDialog) {
    this.title="Stock Audit Detail";
    this.stock= data ;
  }
}
