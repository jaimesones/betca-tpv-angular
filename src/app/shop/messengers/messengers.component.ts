import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";
import {MessengersService} from "../shared/services/messengers.service";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {Messenger} from "../shared/models/messenger.model";
import {MatDialog} from "@angular/material/dialog";
import {MessengersCreationDialogComponent} from "./messengers-creation-dialog.component";
import {AuthService} from "@core/auth.service";
import {MessengerSearch} from "../shared/services/models/messenger-search.model";

@Component({
  selector: 'app-messengers',
  templateUrl: './messengers.component.html',
  styleUrls: ['./messengers.component.css']
})
export class MessengersComponent implements OnInit {

  sentMessengers = of([]);
  receivedMessengers = of([]);
  sent = 'Sent Messengers';
  received = 'Received Messengers';
  title = 'Messengers';
  messengerSearch:MessengerSearch;

  constructor( private messengersService: MessengersService, private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.findSentMessenger();
    this.findReceivedMessenger();
  }

  read(messenger: Messenger): void {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: this.title,
        object: this.messengersService.read(messenger.id)
      }
    });
  }

  create(){
    this.dialog.open(MessengersCreationDialogComponent)
  }

  findSentMessenger(){
    this.messengerSearch = {};
    this.messengerSearch.fromUser = this.authService.getMobile().toString();
    this.sentMessengers = this.messengersService.search(this.messengerSearch);
  }

  findReceivedMessenger(){
    this.messengerSearch = {};
    this.messengerSearch.toUser = this.authService.getMobile().toString();
    this.receivedMessengers = this.messengersService.search(this.messengerSearch);
  }

}
