import {Component} from "@angular/core";
import {of} from "rxjs";
import {StockAudit} from "./stock-audit.model";
import {MatDialog} from "@angular/material/dialog";
import {StockAuditServices} from "./stock-audit.services";
import {StockAuditCreationUpdatingDialogComponent} from "./stock-audit-creation-updating-dialog.component";
import {StockAuditDetailDialogComponent} from "./stock-audit-detail-dialog.component";

@Component({

  templateUrl: 'stock-audit.component.html',
  styleUrls: ['stock-audit.component.css']
})
export class StockAuditComponent  {
  barcode:string;
  stockAudit:StockAudit;
  title="Stock Audit";
  stock= of([]);
  constructor(private dialog: MatDialog, private stockServices:StockAuditServices) {
    this.stock=this.stockServices.show();
  }

  create(): void {
   this.stockServices.create(this.stockAudit).subscribe(value =>
    this.dialog.open(StockAuditCreationUpdatingDialogComponent,{data:value}
    ));
  }

  read(stock:StockAudit):void  {
    this.stockServices.read(stock.id).subscribe(value => this.dialog.open(StockAuditDetailDialogComponent,{data:value}) )
  }

  update(stock:StockAudit) :void {
    this.stockServices.read(stock.id)
      .subscribe(value => this.dialog.open(StockAuditCreationUpdatingDialogComponent,{data:value})
      )
  }

}
