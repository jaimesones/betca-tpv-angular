import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSupportCreationUpdatingDialogComponent } from './technical-support-creation-updating-dialog.component';

describe('TechnicalSupportCreationUpdatingDialogComponent', () => {
  let component: TechnicalSupportCreationUpdatingDialogComponent;
  let fixture: ComponentFixture<TechnicalSupportCreationUpdatingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalSupportCreationUpdatingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSupportCreationUpdatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
