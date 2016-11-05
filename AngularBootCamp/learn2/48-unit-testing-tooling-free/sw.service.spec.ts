/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {Http, BaseRequestOptions, Response, Headers} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { SwService } from './sw.service';

let testData = [
    {
        'name': 'Acme Inc',
        'phone': '555-555-5555',
        'address': '123 Main St',
        'partner': true,
        'bold': true,
        'classy': false,
        'id': 0,
        'netWorth': 10030,
        'numStocks': 100
    },
    {
        'name': 'USR',
        'phone': '101-010-0001',
        'address': '3 Laws St',
        'partner': true,
        'bold': false,
        'classy': true,
        'id': 1,
        'netWorth': 1023400,
        'numStocks': 15640
    },
    {
        'name': 'Umbrella Corp.',
        'phone': '999-999-9999',
        'address': '9 Street',
        'partner': false,
        'bold': true,
        'classy': true,
        'id': 2,
        'netWorth': 123332,
        'numStocks': 22331
    }
];

// npm run test

fdescribe('Service: Sw', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Http, useFactory: (backend: MockBackend, options: BaseRequestOptions) => {

            backend.connections.subscribe((c: MockConnection) => {
              c.mockRespond(new Response({body: testData, status: 200, headers: new Headers({}), url: '/whatever', merge: undefined}));
            });
            return new Http(backend, options);
         }, deps: [MockBackend, BaseRequestOptions]},
         MockBackend,
         BaseRequestOptions,
         SwService]
    });
  });

  it('should return correct data', inject([SwService], (service: SwService) => {
    expect(service).toBeTruthy();
    service.getArchetypes().subscribe(r => {
      console.log('We are checking the dataz')
      expect(r).toBe(testData);
    });
    service.getCompanyDetails(0).subscribe(r => {
      console.log('checking the other dataz');
      expect(r).toBe(testData[0]);
    })
  }));
});
