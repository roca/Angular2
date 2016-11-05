/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {BaseRequestOptions, Http, Response, Headers} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { StarshipService } from './starship.service';

let testData = [{
    'name': 'Consitution',
    'FTL': 'Warp Drive',
    'weapons': [
      'Phasers',
      'Proton Torpedoes'
    ],
    'fighters': false,
    'universe': 'Star Trek'
  }];

fdescribe('Service: Starship', () => {
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
         StarshipService]
    });
  });

  it('should ...', inject([StarshipService], (service: StarshipService) => {
    expect(service).toBeTruthy();
    service.getStarships().subscribe(ships => {
      console.log('checking the dataz');
      expect(ships).toEqual(testData);
    });
  }));
});
