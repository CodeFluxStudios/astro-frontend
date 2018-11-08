import {TestBed} from '@angular/core/testing';

import {CommandService} from './command.service';
import {HttpClientModule} from '@angular/common/http';

describe('CommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CommandService = TestBed.get(CommandService);
    expect(service).toBeTruthy();
  });
});
