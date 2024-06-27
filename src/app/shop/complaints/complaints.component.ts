import { Component} from '@angular/core';
import {of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ComplaintService} from "@shared/services/complaint.service";
import {Complaint} from "@shared/models/complaint.model";
import {ReplyDialogComponent} from "./reply-dialog/reply-dialog.component";

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent{
  title = 'Complaints management';
  complaints = of([]);

  constructor(private dialog: MatDialog, private complaintService: ComplaintService) { }

  searchAll(): void{
    this.complaints = this.complaintService.searchAll();
  }

  update(complaint: Complaint): void {
    this.complaintService.read(complaint.id)
      .subscribe(fullComplaint => this.dialog.open(ReplyDialogComponent, {data: fullComplaint}));
  }

}
