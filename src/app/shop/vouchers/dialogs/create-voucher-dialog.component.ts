import {Component, OnInit} from '@angular/core';
import {Voucher} from "../../shared/models/voucher.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  templateUrl: 'create-voucher-dialog.component.html',
  styleUrls:['dialog.component.css']
})

export class CreateVoucherDialogComponent implements OnInit {
  title:string = "Create Voucher";
  voucher:Voucher;
  dialog:MatDialog;

  constructor(dialog:MatDialog) {
    this.dialog = dialog;
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
}
