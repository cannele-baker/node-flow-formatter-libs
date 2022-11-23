import * as BABYLON from "@babylonjs/core";

describe("Babylong tests2", () => {
  test("Should work please", () => {
    const scalar = new BABYLON.Scalar();
    expect(scalar).not.toBeUndefined();
    console.log(scalar);
  });
});
