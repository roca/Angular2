import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

@Injectable()
export class PhoneLoader {
  phones: {}[];

  constructor(private http: Http) {
    // Try these one at a time:
    this.getAndSubscribe();
    // this.exampleOfDo();
    // this.subscribeTwice();
    // this.share();
  }

  getAndSubscribe() {
    // Verbose code to show the type explicitly:
    this.http.get('../demo-data/phones.json')
      // Call map on the response observable to get the parsed phones object
      .map((res: Response) => res.json())  // 'parse as JSON'
      // Subscribe to the observable to get the parsed phones object
      // and attach it to the component.
      // If you don't subscribe, nothing will happen.
      .subscribe(data => {
        this.phones = data;
        console.log(data);
      });
  }

  exampleOfDo() {
    this.http.get('../demo-data/phones.json')
      // do() call a function for side effects, and returns the original Observable.
      .do((d: Response) => console.log('raw data', d))
      .map((res: Response) => res.json())
      .do((d: any) => console.log('processed data', d))
      .subscribe(data => this.phones = data);
  }

  subscribeTwice() {
    let ob1$ = this.http.get('../demo-data/phones.json')
      // do() calls a function for side effects, and returns the original Observable.
      .do((d: Response) => console.log('do', d))
      .map((res: Response) => res.json());

    // If you don't subscribe ('pull'), nothing will happen.
    ob1$.subscribe(data => {
      console.log('1');
      this.phones = data;
    });

    // If you subscribe twice, it will run twice (!)
    ob1$.subscribe(data => {
      console.log('2');
      this.phones = data;
    });
  }

  share() {
    let ob2$ = this.http.get('../demo-data/phones.json')
      .do((d: Response) => console.log('do', d))
      .map((res: Response) => res.json())
      .share(); // This does reference counting.

    ob2$.subscribe(data => {
      console.log('1');
      this.phones = data;
    });

    ob2$.subscribe(data => {
      console.log('2');
      this.phones = data;
    });
  }

}
