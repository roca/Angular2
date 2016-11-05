import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-list',
  templateUrl: './employeeList.html'
})
export class EmployeeListComponent implements OnInit {
  list$: Observable<IEmployee[]>;

  constructor(private loader: EmployeeLoader) { }

  ngOnInit() {
    this.list$ = this.loader.getList();
  }
}
