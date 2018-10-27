import {TestBed} from '@angular/core/testing';

import {WindowEventListenerService} from './window-event-listener.service';

describe('WindowEventListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowEventListenerService = TestBed.get(WindowEventListenerService);
    expect(service).toBeTruthy();
  });
});
