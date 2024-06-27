import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackWebhookComponent } from './slack-webhook.component';

describe('SlackWebhookComponent', () => {
  let component: SlackWebhookComponent;
  let fixture: ComponentFixture<SlackWebhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackWebhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackWebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
