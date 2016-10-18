import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ship-name',
  templateUrl: './ship-name.component.html',
  styleUrls: ['./ship-name.component.css']
})
export class ShipNameComponent implements OnInit {
  starshipNameGroup: FormGroup;
  constructor(fb: FormBuilder) {
    this.starshipNameGroup = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }
  launchShip() {
    console.log('To infinity and beyond in the ', this.starshipNameGroup.controls['name'].value);
  }
}
