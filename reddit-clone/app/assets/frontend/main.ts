import Greeter from './greeter';

let greeter = new Greeter;

let message = greeter.notify('hello');

alert(message.alertMessage);
