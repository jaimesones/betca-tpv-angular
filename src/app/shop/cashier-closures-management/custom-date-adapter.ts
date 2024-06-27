import {NativeDateAdapter} from "@angular/material/core";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'month-year') {
      const month = date.toLocaleString('en-us', {month: 'long'});
      const year = date.getFullYear();
      return `${month}, ${year}`;
    } else {
      return date.toDateString();
    }
  }
}
