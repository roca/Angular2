import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export interface IEmployee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  hours_worked: number;
  hourly_wage: number;
}

@Injectable()
export class EmployeeLoader {
  constructor(private http: Http) { }

  getList(): Observable<IEmployee[]> {
    return this.http.get('../demo-data/employees.json')
      .map(unwrapData)
      .map(longList => longList.slice(0, 9));
  }

  getDetails(employeeId: number): Observable<IEmployee> {
    return this.http.get(`../demo-data/employees/${employeeId}.json`)
      .map(unwrapData);
  }
}

function unwrapData(res: Response) {
  return res.json();
}
