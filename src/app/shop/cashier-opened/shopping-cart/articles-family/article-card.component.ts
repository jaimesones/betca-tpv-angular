import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  @Input() item;
  constructor() {
  }

  ngOnInit(): void {
  }
}
