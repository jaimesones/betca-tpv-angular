import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Budget } from 'app/shop/shared/models/budgets.model';

@Component({
  selector: 'app-budget-dialog',
  templateUrl: './budget-dialog.component.html',
  styleUrls: ['./budget-dialog.component.css']
})
export class BudgetDialogComponent {
  title = 'View Budget';
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Budget) { }
}
