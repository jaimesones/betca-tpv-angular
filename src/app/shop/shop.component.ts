import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';

import {HttpService} from '@core/http.service';
import {AuthService} from '@core/auth.service';
import {SharedCashierService} from './shared/services/shared.cashier.service';
import {CashierDialogComponent} from './cashier-opened/cashier-closure/cashier-dialog.component';
import {CashMovementDialogComponent} from "./cashier-opened/shared/cash-movement/cash-movement-dialog.component";
import {ArticlesSizeFamilyCreationDialogComponent} from "./articles-size-family-creation/articles-size-family-creation-dialog.component";
import {ReadDetailDialogComponent} from "@shared/dialogs/read-detail.dialog.component";
import {MessengersService} from "./shared/services/messengers.service";
import {MessengerSearch} from "./shared/services/models/messenger-search.model";

@Component({
  templateUrl: 'shop.component.html',
  styleUrls: ['shop.component.css'],

})
export class ShopComponent implements OnInit{
  username: string;
  cashierClosed: boolean;
  messengerSearch: MessengerSearch;

  constructor(private router: Router, private dialog: MatDialog, private httpService: HttpService,
              private tokensService: AuthService, private sharedCashierService: SharedCashierService, private messengersService: MessengersService) {
    this.username = tokensService.getName();
    this.cashierClosed = true;
    this.cashier();
  }

  ngOnInit(): void {
    if(this.tokensService.untilOperator()){
      this.messengerSearch = {};
      this.messengerSearch.fromUser = this.tokensService.getMobile().toString();
      this.messengerSearch.read = false;
      this.messengersService.search(this.messengerSearch).forEach(messenger =>{
        this.dialog.open(ReadDetailDialogComponent, {
          data: {
            title: "Pending Messenger",
            object: messenger
          }
        });
      })
    }
  }

  untilManager(): boolean {
    return this.tokensService.untilManager();
  }

  cashier(): void {
    this.sharedCashierService.readLast()
      .pipe(
        map(cashier => cashier.closed)
      )
      .subscribe(
        closed => {
          this.cashierClosed = closed;
          if (closed) {
            this.router.navigate(['shop', 'cashier-closed']).then();
          } else {
            this.router.navigate(['shop', 'cashier-opened']).then();
          }
        }
      );
  }

  logout(): void {
    this.tokensService.logout();
  }

  openCashier(): void {
    this.sharedCashierService
      .openCashier()
      .subscribe(() => this.cashier());
  }

  closeCashier(): void {
    this.dialog
      .open(CashierDialogComponent)
      .afterClosed()
      .subscribe(() => this.cashier());
  }

  createSizeFamily(): void {
    this.dialog.open(ArticlesSizeFamilyCreationDialogComponent)
      .afterClosed();
  }

  cashMovement(): void {
    this.dialog
      .open(CashMovementDialogComponent);
  }

}
