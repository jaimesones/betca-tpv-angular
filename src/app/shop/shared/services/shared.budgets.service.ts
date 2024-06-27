import { Injectable } from '@angular/core';
import { Shopping } from 'app/shop/cashier-opened/shopping-cart/shopping.model';
import { map, Observable, of } from 'rxjs';
import { Budget } from '../models/budgets.model';

@Injectable({
  providedIn: 'root'
})
export class SharedBudgetsService {
  public getAll(): Observable<Budget[]> { // Mock method for UI
    return of([
      { reference: 'A00001', creationDate: new Date(), shoppings: [ new Shopping('000001', 'Description', 42) ] },
      { reference: 'B02303', creationDate: new Date(), shoppings: [] }  
    ]);
  }

  public findByReference(reference: string): Observable<Budget[]> { // Mock method for UI
    return this.getAll().pipe(
      map(budgets => budgets.filter(b => b.reference.includes(reference))),
    );
  }
}
