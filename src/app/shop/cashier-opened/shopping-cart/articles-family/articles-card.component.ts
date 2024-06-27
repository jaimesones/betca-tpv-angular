import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-articles-card',
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.css']
})
export class ArticlesCardComponent implements OnInit {
  @Input() item;
  constructor() {
  }

  ngOnInit(): void {
  }
}
