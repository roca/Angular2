import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SharedData } from './sharedData';

@Component({
  selector: 'layer-three',
  templateUrl: 'layer-three.component.html'
})
export class LayerThree implements OnInit {
  unsharedValue: number = 0;
  myFormGroup: FormGroup;

  constructor(public shared: SharedData, private fb: FormBuilder) { }

  ngOnInit() {
    this.myFormGroup = this.fb.group({ theData: [''] });
    this.myFormGroup.controls['theData'].valueChanges
      .subscribe(value => this.shared.userInput = value);
  }

  incUnshared() {
    this.unsharedValue++;
  }
}
