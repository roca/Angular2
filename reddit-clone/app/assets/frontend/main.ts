/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>
import Greeter from './greeter';
import {HelloWorld} from './helloWorld';

import {
  bootstrap
} from 'angular2/platform/browser';

let greeter = new Greeter;

let message = greeter.notify('hello');


bootstrap(HelloWorld);

alert(message.alertMessage);
