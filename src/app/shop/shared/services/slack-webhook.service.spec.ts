import { TestBed } from '@angular/core/testing';

import { SlackWebhookService } from './slack-webhook.service';

describe('SlackWebhookServiceService', () => {
  let service: SlackWebhookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackWebhookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
