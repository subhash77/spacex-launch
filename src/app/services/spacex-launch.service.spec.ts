import { TestBed } from '@angular/core/testing';

import { SpacexLaunchService } from './spacex-launch.service';

describe('SpacexLaunchService', () => {
  let service: SpacexLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
