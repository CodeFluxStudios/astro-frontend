import {TestBed} from '@angular/core/testing';

import {GuildService} from './guild.service';
import {HttpClientModule} from '@angular/common/http';

describe('GuildService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: GuildService = TestBed.get(GuildService);
    expect(service).toBeTruthy();
  });
});
