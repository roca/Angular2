import {
  bootstrap
} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_PROVIDERS} from 'angular2/router';


import {AppComponent} from './appComponents';

//let greeter = new Greeter;

//let message = greeter.notify('hellox');



//alert(message.alertMessage);

function main() {

  return bootstrap(
    AppComponent,
    [HTTP_PROVIDERS, ROUTER_PROVIDERS]
  ).catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
