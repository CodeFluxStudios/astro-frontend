import {TestBed} from '@angular/core/testing';

import {ProjectService} from './project.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
