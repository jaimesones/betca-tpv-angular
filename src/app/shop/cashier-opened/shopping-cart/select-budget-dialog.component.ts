import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget } from 'app/shop/shared/models/budgets.model';
import { SharedBudgetsService } from 'app/shop/shared/services/shared.budgets.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './select-budget-dialog.component.html',
})
export class SelectBudgetDialogComponent {
  budgets$: Observable<Budget[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private sharedBudgetsService: SharedBudgetsService
  ) {
    this.budgets$ = this.sharedBudgetsService.findByReference(data);
  }
}
