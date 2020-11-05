import { TestBed } from '@angular/core/testing';

import { IndicateurNumeriqueService } from './indicateur-numerique.service';

describe('IndicateurNumeriqueService', () => {
  let service: IndicateurNumeriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicateurNumeriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
