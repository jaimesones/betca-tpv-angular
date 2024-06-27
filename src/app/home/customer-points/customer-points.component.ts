import {Component, OnInit} from '@angular/core';
import {SharedCustomerPointsService} from "@shared/services/shared.customer-points.service";
import {CustomerPoints} from "@shared/models/customer-points.model";
import {AuthService} from "@core/auth.service";

@Component({
  selector: 'app-customer-points',
  templateUrl: './customer-points.component.html',
  styleUrls: ['./customer-points.component.css']
})
export class CustomerPointsComponent implements OnInit {

  customerPoints: CustomerPoints;

  constructor(private authService: AuthService, private customerPointsService: SharedCustomerPointsService) {
  }

  read(): void {
    this.customerPointsService.read().subscribe(gotten => {
      this.customerPoints = gotten;
    })
  }

  ngOnInit(): void {
  }

}
