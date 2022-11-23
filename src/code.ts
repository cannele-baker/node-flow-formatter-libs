import * as BABYLON from "@babylonjs/core";

class Code {
  names: string[] = [];
  message: string = "";

  constructor(messageIn: string) {
    this.names = ["Bob", "Fred"];
    this.message = messageIn;
  }

  getMessage() {
    return this.message;
  }

  getTime() {
    var today = new Date();
    return today;
  }

  greet() {
    return "Hello, " + this.message + this.names;
  }

  printBaby() {
    const scalar = new BABYLON.Scalar();
    console.log(scalar);
  }
}
export { Code };
