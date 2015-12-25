interface IMessage {
  alertMessage: string;
}


export default class Greeter {
  notify(measage: string): IMessage {
    return {alertMessage: measage};
  }
}
