/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MyNewServiceService } from './my-new-service.service';

describe('Service: MyNewService', () => {
  beforeEach(() => {
    addProviders([MyNewServiceService]);
  });

  it('should ...',
    inject([MyNewServiceService],
      (service: MyNewServiceService) => {
        expect(service).toBeTruthy();
      }));
});
