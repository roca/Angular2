import { OnInit, Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { simpleAsyncValidator, westernZipValidatorFactory, slowAsyncValidator } from './asyncValidators';

@Component({
  selector: 'my-app',
  templateUrl: 'locationForm.html'
})
export class LocationFormComponent implements OnInit {
  inputFormGroup: FormGroup;

  constructor(private http: Http) { }

  ngOnInit() {
    this.inputFormGroup = new FormBuilder().group({
      input: ['', Validators.nullValidator, simpleAsyncValidator],
      zip: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.required
        ],
        [
          slowAsyncValidator,
          westernZipValidatorFactory(this.http)
        ]
      ]
    });
  }

  logTheForm(): void {
    console.log('form: ', this.inputFormGroup);
  }
}
