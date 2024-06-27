import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GiftTicket} from "./gift-ticket.model";

@Component({
  templateUrl: 'gift-ticket-dialog.component.html'
})
export class GiftTicketDialogComponent {
  titleDialog = "Gift Ticket"
  titleMessageDialog = "Write your message:"
  wroteMessage = " ";
  constructor(public dialogRef: MatDialogRef<GiftTicketDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:GiftTicket){

  }

  close(): void {
    this.dialogRef.close();
  }
}
