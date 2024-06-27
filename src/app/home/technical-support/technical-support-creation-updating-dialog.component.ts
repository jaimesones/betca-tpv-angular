import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {TechnicalSupportRequest} from "@shared/models/technical-support-request.model";
import {TechnicalSupportService} from "@shared/services/technical-support.service";

@Component({
  selector: 'app-technical-support-creation-updating-dialog',
  templateUrl: './technical-support-creation-updating-dialog.component.html',
  styleUrls: ['./technical-support-creation-updating-dialog.component.css']
})
export class TechnicalSupportCreationUpdatingDialogComponent {
  title: string;
  request: TechnicalSupportRequest;
  newAnswer: string;
  oldIdentifier: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: TechnicalSupportRequest, private technicalSupportService: TechnicalSupportService, private dialog: MatDialog) {
    this.title = 'Request';
    this.request = data ? data : {
      identifier: undefined, request: undefined, answers: undefined, resolved: undefined
    }
    this.oldIdentifier = data ? data.identifier : undefined;
    this.newAnswer ="";
  }

  create(): void {
    this.request.resolved = false;
    this.technicalSupportService
      .create(this.request)
      .subscribe(() => this.dialog.closeAll())
  }

  isCreate(): boolean {
    return this.oldIdentifier === undefined;
  }

}
