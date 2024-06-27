import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

import {Complaint} from '@shared/models/complaint.model';
import {ComplaintService} from '@shared/services/complaint.service';
import {AuthService} from '@core/auth.service';

@Component({
  templateUrl: 'complaint-creation-updating-dialog.component.html',
  styleUrls: ['complaint-dialog.component.css']
})

export class ComplaintCreationUpdatingDialogComponent {
  complaint: Complaint;
  title: string;
  oldId: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: Complaint, private complaintService: ComplaintService, private dialog: MatDialog, private authService: AuthService) {
    this.title = data ? 'Update Complaint' : 'Create Complaint';
    this.complaint = data ? data : {barcode: undefined, description: undefined};
    this.oldId = data ? data.id : undefined;
  }

  isCreated(): boolean{
    return this.oldId === undefined;
  }

  create(): void {
    this.complaintService
      .create(this.complaint)
      .subscribe(() => this.dialog.closeAll());
  }

  update(): void{
    this.complaintService
      .update(this.oldId, this.complaint)
      .subscribe(() => this.dialog.closeAll());
  }

  invalid(): boolean {
    return this.check(this.complaint.barcode) || this.check(this.complaint.description);
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }
}
