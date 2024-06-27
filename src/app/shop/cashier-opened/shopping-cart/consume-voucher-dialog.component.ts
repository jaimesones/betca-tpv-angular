import {Component, OnInit} from '@angular/core';
import {Voucher} from "../../shared/models/voucher.model";
import {MatDialog} from "@angular/material/dialog";
import {Observable, of} from "rxjs";
import {VoucherService} from "../../shared/services/voucher.service";

@Component({
  templateUrl: 'consume-voucher-dialog.component.html',
})

export class ConsumeVoucherDialogComponent implements OnInit {
  private voucherService: VoucherService;
  title:string = "Consume Voucher";
  references:Observable<String[]> = of([]);
  voucher:Voucher;
  dialog:MatDialog;

  constructor(dialog:MatDialog, voucherService:VoucherService) {
    this.dialog = dialog;
    this.voucherService = voucherService;
  }

  ngOnInit() {
    this.voucher = {
      reference:null,
      value:null,
      userPhone:null,
      creationDate:new Date(),
      dateOfUse:null,
      consumed:null
    };
  }

  onClickDoCreate(){
    console.log("Created voucher: " + JSON.stringify(this.voucher));
    this.dialog.closeAll();
  }

  invalid(): boolean {
    return (this.voucher.value??0) <= 0 || (this.voucher.userPhone??0) < 600000000;
    //TODO create real validations
  }

  searchVoucherByReference():void{
    this.references = this.voucherService.searchAllReferences();
  }
}
