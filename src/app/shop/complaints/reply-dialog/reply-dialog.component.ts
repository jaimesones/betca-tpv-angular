import {Component, Inject} from '@angular/core';
import {Complaint} from "@shared/models/complaint.model";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ComplaintService} from "@shared/services/complaint.service";

@Component({
  selector: 'app-reply-dialog',
  templateUrl: './reply-dialog.component.html',
  styleUrls: ['./reply-dialog.component.css']
})
export class ReplyDialogComponent{

  complaint: Complaint;
  oldId: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: Complaint, private complaintService: ComplaintService, private dialog: MatDialog) {
    this.complaint = data;
    this.oldId = data.id;
  }

  update(): void{
    this.complaintService
      .update(this.oldId, this.complaint)
      .subscribe(() => this.dialog.closeAll());
  }

}
