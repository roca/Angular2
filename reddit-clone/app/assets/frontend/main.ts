/// <reference path="../../../DefinitelyTyped/angular2/angular2-2.0.0-alpha.26.d.ts"/>
//import Greeter from './greeter';
import {RedditApp} from './redditApp';

import {
  bootstrap
} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';



//let greeter = new Greeter;

//let message = greeter.notify('hellox');



//alert(message.alertMessage);

function main() {

  return bootstrap(RedditApp, [HTTP_PROVIDERS]).catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
