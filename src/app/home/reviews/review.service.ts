import { Injectable } from '@angular/core';
import {Review} from './review.model';
import {Observable, of} from 'rxjs';
import {AuthService} from '@core/auth.service';
import {User} from '@core/user.model';
import {Role} from '@core/role.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Article} from '../shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  // Data mock
  private reviews: Review[];
  private user: User = {
    mobile: this.authService.getMobile(),
    name: this.authService.getName(),
    role: Role.CUSTOMER,
    token: this.authService.getToken()
  };
  private article : Article = {
    barcode: '#00000001',
    description: '1',
    retailPrice: 1
  };
  constructor(private authService: AuthService, private snackBar: MatSnackBar) {
    this.reviews = [
      { user: this.user, article: {barcode: '#00000001', description: '1', retailPrice: 1}, score: 2.5, opinion: 'OK' },
      { user: this.user, article: {barcode: '#00000002', description: '2', retailPrice: 2}, score: 5, opinion: 'NO' },
      { user: this.user, article: {barcode: '#00000003', description: '3', retailPrice: 3}, score: 0.5, opinion: 'Bad' },
      { user: this.user, article: {barcode: '#00000004', description: '4', retailPrice: 4} },
      { user: this.user, article: {barcode: '#00000005', description: '5', retailPrice: 5} },
      { user: this.user, article: {barcode: '#00000006', description: '6', retailPrice: 6} },
      { user: this.user, article: {barcode: '#00000011', description: '7', retailPrice: 7} }
    ];
  }
  evaluate(review: Review): Observable<Review> {
    // Snackbar MOCK. Call httpService.successful() instead
    this.snackBar.open('Review created successfully', '', {
      duration: 2000
    });
    return of(review);
  }
  modify(review: Review): Observable<Review> {
    // Snackbar MOCK. Call httpService.successful() instead
    this.snackBar.open('Review updated successfully', '', {
      duration: 2000
    });
    return of(review);
  }
  searchAll(): Observable<Review[]> {
    return of(this.reviews);
  }
  searchIfExists(review: Review): Observable<boolean> {
    if (review.opinion == null) {
      return of(false);
    } else {
      return of(true);
    }
  }
}
