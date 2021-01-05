// imports
import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

// Describe
describe("destruc test", () => {
  // test
  test("A number or string must be returned", () => {
    const [leters, numbers] = retornaArreglo();
    //expect(arr).toEqual(["ABC", 123]);

    //letter
    expect(leters).toEqual("ABC");
    expect(typeof leters).toBe("string");

    //number
    expect(numbers).toEqual(123);
    expect(typeof numbers).toBe("number");
  });
});
