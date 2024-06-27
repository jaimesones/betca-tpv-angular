import {Observable, of} from 'rxjs';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SharedUserService} from './services/shared.user.service';

@Component({
  selector: 'app-search-by-mobile',
  templateUrl: './search-by-mobile.component.html'
})
export class SearchByMobileComponent{
  mobiles: Observable<string[]> = of([]);

  @Input() mobile: string;
  @Input() title: string;
  @Output() mobileChange = new EventEmitter<string>();

  constructor(private sharedUserService: SharedUserService) {
  }

  public onSelect(): void {
    this.mobileChange.emit(this.mobile);
  }

  searchByMobile(): void {
    this.mobiles = this.sharedUserService.searchMobiles(this.mobile);
  }
}
