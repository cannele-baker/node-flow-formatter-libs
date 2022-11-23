import { Code } from "../src/code";

let code = new Code("Test Message!!");

document.getElementById("app").innerHTML = `
  <h1>Hello CodeSandBox Test 1</h1>
  <div>
    Look
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a> for more info about Parcel.
    <br>
    <br>
    Original Source Code is here: <a href="https://codesandbox.io/s/dreamy-dubinsky-nj0ky" target="_blank" rel="noopener noreferrer">here</a>
    <br>
    <h2>
    Dynamic Content
    </h2>
    <br>
      ${code.getMessage()}, 
      ${code.getTime()}
      ${code.printBaby()}
    <br>
  </div>
`;
