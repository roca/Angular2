import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface ILocationFormState {
  city: string;
  state: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './location.html'
})
export class LocationComponent implements OnInit {
  locationFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.locationFormGroup = this.fb.group({
      city: ['', Validators.required],
      state: ['']
    });

    const cityChanges: Observable<string> = this.locationFormGroup.controls['city'].valueChanges;
    cityChanges.subscribe(val => {
      console.log('city: ', val);
    });

    const stateChanges: Observable<string> = this.locationFormGroup.controls['state'].valueChanges;
    stateChanges.subscribe(val => {
      console.log('state: ', val);
    });

    const formChanges: Observable<ILocationFormState> = this.locationFormGroup.valueChanges;
    // Could be much later or in different context
    formChanges
    // Operators allow you to calculate new results and pass them to the next person in the stream
    // There are many different kinds of operators, map is the simplest
    .map(val => val.city + ' ' + val.city)
    .subscribe(val => {
      console.log('form: ', val);
    });
  }

  onLogin(): void {
    console.log('Form Submitted', this.locationFormGroup.value);
  }

  logTheForm(): void {
    console.log('form: ', this.locationFormGroup);
  }
}
