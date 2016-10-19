import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {Http} from '@angular/http';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string;
  message: string;
  personInfo: Observable<{}>;
  constructor(title: Title, private route: ActivatedRoute, http: Http) {
    console.log(title.getTitle());
    title.setTitle('Welcome');
    this.pageTitle = title.getTitle();
    console.log(document.title);
    this.route.params.subscribe(params => {
      console.log('Got new value for params', params);
      this.message = params['who'];
    });
    this.personInfo = this.route.params.map(p => p['who'])
    .switchMap(n => {
      return http.get('/assets/' + n + '.json').map(r => r.json());
    });
  }

  ngOnInit() {
  }

}
