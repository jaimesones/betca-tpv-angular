import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-score-bar',
  templateUrl: './score-bar.component.html'
})
export class ScoreBarComponent implements OnInit {
  @Input() score: number;
  @Output() scoreChange = new EventEmitter<number>();
  private ICON_WIDTH = 20;
  private NUMBER_ICONS = 5;
  iconNames: string[] = [];
  ngOnInit(): void {
    this.fillStars(this.score);
  }
  private fillStars(starsToFill: number): void {
    let stars = starsToFill;
    if (stars === undefined) { stars = 0; }
    for (let i = 0; i < this.NUMBER_ICONS; i++) {
      if (i + 0.5 < stars) {
        this.iconNames[i] = 'star';
      }
      if (i + 0.5 === stars) {
        this.iconNames[i] = 'star_half';
      }
      if (i + 0.5 > stars) {
        this.iconNames[i] = 'star_border';
      }
    }
  }
  fillStarsOnHover(myEvent: any): void {
    this.fillStars(this.getScoreFromStars(myEvent));
  }
  fillStarsOnOut(): void {
    this.fillStars(this.score);
  }
  fillStarsOnClick(myEvent: any): void {
    this.score = this.getScoreFromStars(myEvent);
    this.scoreChange.emit(this.score);
    this.fillStars(this.score);
  }
  private getScoreFromStars(myEvent: any): number {
    const iconId = myEvent.id;
    const event = myEvent.event;
    if (Math.sign(event.offsetX - this.ICON_WIDTH / 2) >= 0) {
      return Number.parseInt(iconId, 10) + 1;
    } else {
      return Number.parseInt(iconId, 10) + 0.5;
    }
  }
}
