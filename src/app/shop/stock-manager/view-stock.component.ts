import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html'
})
export class ViewStockComponent {

  @Input() title = 'Management';
  @Input() readAction = true;
  @Input() predictTimeAction = true;
  @Input() predictEndAction = true;
  @Output() read = new EventEmitter<any>();
  @Output() predictTime = new EventEmitter<any>();
  @Output() predictEnd = new EventEmitter<any>();
  dataSource: MatTableDataSource<any>;
  columns: Array<string>;
  columnsHeader: Array<string>;

  @Input()
  set data(data: Observable<any[]>) {
    data.subscribe(dataValue => {
      const columnsSet: Set<string> = new Set();
      this.dataSource = new MatTableDataSource<any>(dataValue);
      if (dataValue) {
        dataValue.forEach(obj => Object.getOwnPropertyNames(obj)
          .forEach(column => columnsSet.add(column))
        );
        this.columns = Array.from(columnsSet);
      } else {
        this.columns = [];
      }
      columnsSet.add('actions');
      this.columnsHeader = Array.from(columnsSet);
    });
  }

  onRead(item): void {
    this.read.emit(item);
  }


}
