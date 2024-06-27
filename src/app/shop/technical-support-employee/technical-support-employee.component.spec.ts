import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSupportEmployeeComponent } from './technical-support-employee.component';

describe('TechnicalSupportEmployeeComponent', () => {
  let component: TechnicalSupportEmployeeComponent;
  let fixture: ComponentFixture<TechnicalSupportEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalSupportEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSupportEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
