import {Component, Inject, OnInit} from '@angular/core';
import {Messenger} from "../shared/models/messenger.model";
import {MessengersService} from "../shared/services/messengers.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AuthService} from "@core/auth.service";


@Component({
  selector: 'app-messengers-creation-dialog',
  templateUrl: './messengers-creation-dialog.component.html',
  styleUrls: ['./messengers-creation-dialog.component.css']
})
export class MessengersCreationDialogComponent implements OnInit {

  title: string;
  messenger: Messenger;

  constructor(@Inject(MAT_DIALOG_DATA) messengers: Messenger,private messengersService: MessengersService, private authService: AuthService, private dialog: MatDialog) {
    this.messenger = {
      id: undefined, fromUser: undefined, toUser: undefined, subject: undefined, text: undefined, read: false
    };
  }

  ngOnInit(): void {
    this.messenger.fromUser= this.authService.getMobile().toString();
  }

  invalid(): boolean {
    return this.check(this.messenger.fromUser) || this.check(this.messenger.toUser) || this.check(this.messenger.subject) || this.check(this.messenger.text)
  }

  check(attr: string): boolean {
    return attr === undefined || null || attr === '';
  }

  create(): void {
    this.messengersService
      .create(this.messenger)
      .subscribe(() => this.dialog.closeAll());
  }
}
