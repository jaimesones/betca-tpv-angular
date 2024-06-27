import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '@core/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ShoppingBasketService} from "../../home/shopping-basket/shopping-basket.service";

@Component({
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LoginDialogComponent {
  mobile: number;
  password: string;

  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog, private cartService: ShoppingBasketService) {
  }

  login(): void {
    this.auth.login(this.mobile, this.password).subscribe(
      () => {
        if (this.auth.untilOperator()) {
          this.router.navigate(['shop']).then().finally(() => this.dialog.closeAll());
        } else {
          this.cartService.getShoppingCart().subscribe();
          this.dialog.closeAll();
        }
      }
    );
  }
}
