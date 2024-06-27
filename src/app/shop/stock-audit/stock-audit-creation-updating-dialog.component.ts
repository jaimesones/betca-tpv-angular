import {Component, Inject} from "@angular/core";
import {StockAudit} from "./stock-audit.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {StockAuditServices} from "./stock-audit.services";
import {ArticleLoss} from "./Article-Loss.model";

@Component({

  templateUrl: 'stock-audit-creation-updating-dialog.component.html'
})
export class StockAuditCreationUpdatingDialogComponent {
  stock:StockAudit;
  title:string;
  oldId:string;
  barcode:string[];
  articleLoss:ArticleLoss=new ArticleLoss();

  constructor(@Inject(MAT_DIALOG_DATA)data:StockAudit ,private dialog:MatDialog,private stockAuditServices:StockAuditServices) {
    this.title="Stock Audit";
    this.stock= data ? data:{
      articlesWithoutAudit:undefined,creationDate:undefined,closeDate:undefined,
      lossValue:undefined,articleLoss:undefined ,id:undefined
    };
    this.oldId = data ? data.id : undefined;
    this.barcode= this.stock.articlesWithoutAudit.map(a=>a.barcode);
  }

  create(): void {
  }

  update(): void {
    //this.stockAuditServices.update(this.oldId,this.stock)
      //.subscribe(() => this.dialog.closeAll())

   // create(this.stock).subscribe((value)=> console.log(value));
    //console.log("amount:::///"+this.losses.amount)
    //console.log("barcode:::///"+this.losses.barcode)

    console.log(this.stock);


  }

  isCreate(): boolean {
    return this.oldId === undefined;
  }

  invalid(): boolean {
    //todo valid conditions
    return false;
  }


  closeAudit() {
    //todo closeAudit
    this.dialog.closeAll();
  }
  AddArticleLoss() {
    //this.stock.articleLoss.push(this.articleLoss);
    //let index =this.barcode.indexOf(this.articleLoss.barcode)
    //this.barcode.splice(index,1)
    //this.articleLoss= new ArticleLoss();
   // console.log(this.articleLoss)
  }
}
