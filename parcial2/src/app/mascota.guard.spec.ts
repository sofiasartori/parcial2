import { TestBed, async, inject } from '@angular/core/testing';

import { MascotaGuard } from './mascota.guard';

describe('MascotaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MascotaGuard]
    });
  });

  it('should ...', inject([MascotaGuard], (guard: MascotaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
