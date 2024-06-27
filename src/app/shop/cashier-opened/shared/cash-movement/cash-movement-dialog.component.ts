import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CashMovementType} from './cash-movement-type.model';
import {CashMovement} from "./cash-movement.model";
import {CashMovementService} from "./cash-movement.service";

@Component({
  selector: 'app-cash-movement',
  templateUrl: './cash-movement-dialog.component.html',
  styleUrls: ['./cash-movement-dialog.component.css']
})
export class CashMovementDialogComponent {
  cashMovement: CashMovement;
  cashMovementType = CashMovementType;
  cashMovementTypes = [CashMovementType.Deposit, CashMovementType.Withdrawal];

  constructor(private dialogRef: MatDialogRef<CashMovementDialogComponent>,
              private cashMovementService: CashMovementService) {
    this.cashMovement = {cash: 0, type: CashMovementType.Deposit, description: undefined};
  }

  record(): void {
    this.cashMovementService
      .create(this.cashMovement)
      .subscribe(() => this.dialogRef.close());
  }

  invalid(): boolean {
    return !this.cashMovement.description;
  }

}
