import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {CreditLine} from "./credit-line.model";
import {CreditLineService} from "./credit-line.service";
import {SharedUserService} from "../shared/services/shared.user.service";

@Component({
  templateUrl: 'credit-line-creation-updating-dialog.component.html',
  styleUrls: ['credit-line-creation-updating-dialog.component.css']
})
export class CreditLineCreationUpdatingDialogComponent {

  mobileExists: boolean;
  completedData: boolean;
  title: string;
  creditLine: CreditLine;

  constructor(@Inject(MAT_DIALOG_DATA) data: CreditLine, private creditLineService: CreditLineService, private sharedUserService: SharedUserService, private dialog: MatDialog) {
    this.title = "Create a credit line for an user";
    this.completedData = false;
    this.mobileExists = true;
    this.creditLine = {
      mobile: undefined,
      creationDate: undefined,
      sales: undefined
    };
  }


  create(): void {
    this.creditLineService
      .create(this.creditLine.mobile)
      .subscribe(() => this.dialog.closeAll());
  }
  /*
  async create() {
    await this.checkMobileExists();
    if (this.mobileExists) {
      // todo create credit line
      this.dialog.closeAll();
    }
  }

  async checkMobileExists() {
    this.mobileExists = true;
    let response = await this.sharedUserService
      .read(this.creditLine.mobile)
      .toPromise();
    if(response == null) {
        this.mobileExists = false;
    }
  }
   */
}
