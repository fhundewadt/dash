/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

describe('Service: CanDeactivateGuard', () => {
  beforeEach(() => {
    addProviders([ CanDeactivateGuardService ]);
  });

  it('should ...',
    inject([ CanDeactivateGuardService ],
      ( service: CanDeactivateGuardService ) => {
        expect(service).toBeTruthy();
      }));
});
