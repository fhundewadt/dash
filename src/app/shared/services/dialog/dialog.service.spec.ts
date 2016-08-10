/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { DialogService } from './dialog.service';

describe('Service: Dialog', () => {
  beforeEach(() => {
    addProviders([ DialogService ]);
  });

  it('should ...',
    inject([ DialogService ],
      ( service: DialogService ) => {
        expect(service).toBeTruthy();
      }));
});
