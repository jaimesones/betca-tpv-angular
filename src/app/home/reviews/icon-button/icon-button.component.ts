import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html'
})
export class IconButtonComponent {
  @Input() id: string;
  @Input() iconName: string;
  @Output() clickEvt = new EventEmitter<any>();
  @Output() mouseoverEvt = new EventEmitter<any>();
  @Output() mouseoutEvt = new EventEmitter<any>();

  onClick(event: MouseEvent): void {
    const myEvent = { id: this.id, event };
    this.clickEvt.emit(myEvent);
  }
  onMouseOver(event: MouseEvent): void {
    const myEvent = { id: this.id, event };
    this.mouseoverEvt.emit(myEvent);
  }
  onMouseOut(): void {
    this.mouseoutEvt.emit();
  }
}
