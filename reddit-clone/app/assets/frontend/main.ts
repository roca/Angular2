interface IMessage {
  alertMessage: string;
}

class Greeter {
  notify(measage: string): IMessage {
    return {alertMessage: measage};
  }
}

let greeter = new Greeter;

let message = greeter.notify('hello');

alert(message.alertMessage);
