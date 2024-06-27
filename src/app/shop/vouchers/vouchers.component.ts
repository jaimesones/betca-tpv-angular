import {Component, OnInit} from '@angular/core';
import {Voucher} from "../shared/models/voucher.model";
import {Observable, of} from "rxjs";
import {VoucherService} from "./voucher.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateVoucherDialogComponent} from "./dialogs/create-voucher-dialog.component";

@Component({
  selector: 'app-vouchers',
  templateUrl: 'vouchers.component.html',
  styleUrls: ['vouchers.component.css']
})

export class VouchersComponent implements OnInit {
  private voucherService: VoucherService;
  private dialog: MatDialog;

  voucherFilterModel:Voucher;
  data:Observable<Voucher[]> = of([]);

  constructor(voucherService: VoucherService, dialog: MatDialog) {
    this.voucherService = voucherService;
    this.dialog = dialog;
    this.voucherFilterModel = {
      reference: null,
      value: null,
      userPhone: null,
      creationDate: new Date(),
      dateOfUse: null,
      consumed: null
    };
  }

  ngOnInit() {

  }

  onCreate(){
    this.dialog.open(CreateVoucherDialogComponent);
  }

  search(){
    console.log("Search by: " + JSON.stringify(this.voucherFilterModel));
    this.data = this.voucherService.searchAll();
  }


}
