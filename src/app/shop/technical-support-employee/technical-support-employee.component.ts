import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

import {TechnicalSupportSearch} from "@shared/models/technical-support-search.model";
import {TechnicalSupportService} from "@shared/services/technical-support.service";
import {TechnicalSupportRequest} from "@shared/models/technical-support-request.model";
import {MatDialog} from "@angular/material/dialog";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {TechnicalSupportEmployeeUpdatingDialogComponent} from "./technical-support-employee-updating-dialog.component";

@Component({
  selector: 'app-technical-support-employee',
  templateUrl: './technical-support-employee.component.html',
  styleUrls: ['./technical-support-employee.component.css']
})
export class TechnicalSupportEmployeeComponent implements OnInit {
  identifier: number;
  technicalSupportSearch: TechnicalSupportSearch;
  requests = of([]);
  newComment: string;
  title = 'Technical support management';
  columnsHeader: Array<string> = ["identifier", "request", "resolved", "actions"];
  constructor(private dialog: MatDialog, private technicalSupportService: TechnicalSupportService) {
    this.resetSearch();
  }
  search(): void {
    this.requests = this.technicalSupportService.search(this.technicalSupportSearch);
  }

  resetSearch(): void {
    this.technicalSupportSearch = {};
  }

  create(): void {
    this.dialog.open(TechnicalSupportEmployeeUpdatingDialogComponent);
  }

  read(technicalSupportRequest: TechnicalSupportRequest) {
    this.dialog.open(ReadDetailDialogComponent, {
      data: {
        title: 'Technical Request details',
        object: this.technicalSupportService.read(technicalSupportRequest.identifier)
      }
    });
  }

  update(technicalSupportRequest: TechnicalSupportRequest) {
    this.technicalSupportService.read(technicalSupportRequest.identifier)
      .subscribe(fullRequest => this.dialog.open(TechnicalSupportEmployeeUpdatingDialogComponent, {data: fullRequest}));
  }

  ngOnInit(): void {
    this.requests = this.technicalSupportService.search(this.technicalSupportSearch);
  }

}
