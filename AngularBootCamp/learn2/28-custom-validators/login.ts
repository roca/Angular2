import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { trivialValidator, fiveValidator, matchingPasswordValidator, matchingFieldValidator} from './validators';

@Component({
  selector: 'my-app',
  templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group(
      {
        login: ['user', Validators.required],
        password: ['defaultPass', [Validators.minLength(3), Validators.required]],
        enterFive: ['5', fiveValidator],
        confirmPassword: ['pass', Validators.minLength(3)]
      },
      {
        validator: matchingPasswordValidator
        // validator: matchingFieldValidator('password', 'confirmPassword', 'mismatched')
      });
  }

  onLogin(): void {
    console.log('Form Submitted', this.loginFormGroup.value);
  }

  logTheForm(): void {
    console.log('form: ', this.loginFormGroup);
  }
}
