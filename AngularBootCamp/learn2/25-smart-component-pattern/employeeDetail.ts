import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-detail',
  template: `<employee-display [employee]="theEmployee$ | async"></employee-display>`
})
export class EmployeeDetailComponent {
  theEmployee$: Observable<IEmployee>;

  constructor(route: ActivatedRoute, loader: EmployeeLoader) {
    const employeeId$ = route.params.map(params => params['employeeId']);
    this.theEmployee$ = <Observable<IEmployee>> employeeId$.switchMap((id): Observable<IEmployee>  => loader.getDetails(id));
  }
}
