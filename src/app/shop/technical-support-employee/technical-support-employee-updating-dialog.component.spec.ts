import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSupportEmployeeUpdatingDialogComponent } from './technical-support-employee-updating-dialog.component';

describe('TechnicalSupportEmployeeUpdatingDialogComponent', () => {
  let component: TechnicalSupportEmployeeUpdatingDialogComponent;
  let fixture: ComponentFixture<TechnicalSupportEmployeeUpdatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalSupportEmployeeUpdatingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSupportEmployeeUpdatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
