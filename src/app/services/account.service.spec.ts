import {TestBed} from '@angular/core/testing';

import {AccountService} from './account.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
