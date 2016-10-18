import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle: string;
  constructor(title: Title) {
    console.log(title.getTitle());
    title.setTitle("Welcome");
    this.pageTitle = title.getTitle();
    console.log(document.title);
  }

  ngOnInit() {
  }

}
