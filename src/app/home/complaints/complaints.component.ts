import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {of} from 'rxjs';

import {ComplaintCreationUpdatingDialogComponent} from './complaint-creation-updating-dialog.component';
import {ComplaintService} from '@shared/services/complaint.service';
import {Complaint} from '@shared/models/complaint.model';
import {CancelYesDialogComponent} from "@shared/dialogs/cancel-yes-dialog.component";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";

@Component({
  templateUrl: 'complaints.component.html'
})
export class ComplaintsComponent {
  title = 'Complaints management';
  complaints = of([]);

  constructor(private dialog: MatDialog, private complaintService: ComplaintService) {
  }

  create(): void {
    this.dialog
      .open(ComplaintCreationUpdatingDialogComponent)
      .afterClosed()
      .subscribe(() => this.searchAll());
  }

  searchAll(): void {
    this.complaints = this.complaintService.searchAll();
  }

  read(complaint: Complaint){
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Complaint Detail',
        object: this.complaintService.read(complaint.id)
      }
    })
  }

  update(complaint: Complaint): void {
    this.complaintService.read(complaint.id)
      .subscribe(fullComplaint => this.dialog.open(ComplaintCreationUpdatingDialogComponent, {data: fullComplaint}));
  }

  delete(complaint: Complaint): void {
    this.dialog.open(CancelYesDialogComponent).afterClosed().subscribe((resp) => resp.this.searchAll());
  }
}
