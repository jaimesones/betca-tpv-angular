import {Component, Inject} from '@angular/core';
import {TechnicalSupportRequest} from "@shared/models/technical-support-request.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {TechnicalSupportService} from "@shared/services/technical-support.service";
import {TechnicalSupportAnswer} from "@shared/models/technical-support-answer.model";

@Component({
  selector: 'app-technical-support-employee-updating-dialog',
  templateUrl: './technical-support-employee-updating-dialog.component.html',
  styleUrls: ['./technical-support-employee-updating-dialog.component.css']
})
export class TechnicalSupportEmployeeUpdatingDialogComponent {

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

  update(): void {
    if(this.newAnswer.length > 0)
    {
      this.request.resolved = false;
      let updateAnswer = new TechnicalSupportAnswer();
      updateAnswer.answer = this.newAnswer;
      updateAnswer.dateSent = new Date();
      let updatedAnswers = [];
      updatedAnswers = this.request.answers ? this.request.answers: [];
      updatedAnswers.push(updateAnswer)
      this.request.answers = updatedAnswers;
      this.technicalSupportService
        .update(this.oldIdentifier, this.request)
        .subscribe(() => this.dialog.closeAll());
    }
  }

  resolve(): void {
    this.request.resolved = true;
    this.technicalSupportService
      .update(this.oldIdentifier, this.request)
      .subscribe(() => this.dialog.closeAll());
  }

  isCreate(): boolean {
    return this.oldIdentifier === undefined;
  }

}
