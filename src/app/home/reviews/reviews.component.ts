import { Component } from '@angular/core';
import {Review} from './review.model';
import {ReviewService} from './review.service';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  constructor(private reviewsService: ReviewService, private snackBar: MatSnackBar) {
  }
  evaluate(review: Review): void {
    if (review.score === undefined || review.score === 0) {
      this.snackBar.open('Please, insert a score before saving the review.', '', {
        duration: 3000
      });
    } else {
      this.reviewsService.evaluate(review);
    }
  }
  modify(review: Review): void {
    this.reviewsService.modify(review);
  }
  searchAll(): Observable<Review[]> {
    return this.reviewsService.searchAll();
  }
  searchIfExists(review: Review): Observable<boolean> {
    return this.reviewsService.searchIfExists(review);
  }
}
