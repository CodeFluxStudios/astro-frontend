import {TestBed} from '@angular/core/testing';

import {AccountService} from './account.service';
import {HttpClientModule} from '@angular/common/http';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
