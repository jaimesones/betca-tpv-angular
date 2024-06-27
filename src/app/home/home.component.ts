import {ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {AuthService} from '@core/auth.service';
import {ShoppingBasketService} from "./shopping-basket/shopping-basket.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  title = 'TPV';
  username = undefined;
  subs:Array<Subscription> = [];
  num;

  constructor(private dialog: MatDialog, private authService: AuthService,
              private shoppingBasketService: ShoppingBasketService,
              private cd:  ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subs.push(this.shoppingBasketService.getAmountObserver().subscribe((num) => this.num = num))
  }

  login(): void {
    this.dialog.open(LoginDialogComponent)
      .afterClosed()
      .subscribe(() => this.username = this.authService.getName());
  }

  logout(): void {
    this.authService.logout();
  }

  cart(): void {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  search(value): void {
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      if (sub && !sub.closed)
        sub.unsubscribe();
    }
  }

}
