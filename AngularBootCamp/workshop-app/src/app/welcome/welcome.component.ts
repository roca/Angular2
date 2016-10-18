import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string;
  message: string;
  constructor(title: Title, private route: ActivatedRoute) {
    console.log(title.getTitle());
    title.setTitle("Welcome");
    this.pageTitle = title.getTitle();
    console.log(document.title);
    this.route.params.subscribe(params => {
      console.log("Got new value for params", params);
      this.message = params['who'];
    });
  }

  ngOnInit() {
  }

}
