import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Budget } from '../shared/models/budgets.model';
import { SharedBudgetsService } from '../shared/services/shared.budgets.service';
import { BudgetDialogComponent } from './dialogs/budget-dialog/budget-dialog.component';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css'],
})
export class BudgetsComponent implements OnInit {
  budgets: Observable<Budget[]> = of([]);

  fromDate: Date = new Date();
  untilDate: Date = new Date();
  reference: string = '';

  constructor(
    private sharedBudgetService: SharedBudgetsService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.budgets = this.sharedBudgetService.getAll();
  }

  public read(budget: Budget): void {
    this.matDialog.open(BudgetDialogComponent, { data: budget });
  }

  public update(e: any): void {
    // TODO
  }

  public delete(e: any): void {
    // TODO
  }

  public search(): void {
    // TODO
  }
}
