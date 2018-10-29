import {TestBed} from '@angular/core/testing';

import {WindowEventListenerService} from './window-event-listener.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('WindowEventListenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: WindowEventListenerService = TestBed.get(WindowEventListenerService);
    expect(service).toBeTruthy();
  });
});
