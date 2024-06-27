import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sizes-family-card',
  templateUrl: './sizes-family-card.component.html',
  styleUrls: ['./sizes-family-card.component.css']
})
export class ArticleSizesFamilyCardComponent implements OnInit {
  @Input() item;
  constructor() {
  }

  ngOnInit(): void {
  }
}
