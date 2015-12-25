/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>
import Greeter from './greeter';
import {HelloWorld} from './helloWorld';

import {
  bootstrap
} from 'angular2/platform/browser';



let greeter = new Greeter;

let message = greeter.notify('hellox');



alert(message.alertMessage);

function main() {

  return bootstrap(HelloWorld).catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
