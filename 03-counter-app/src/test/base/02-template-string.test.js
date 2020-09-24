//Test at 02 Template
import "@testing-library/jest-dom";
import getSaludo from "../../base/02-template-string";

describe("Test on 02-template-string.js", () => {
  test("getSaludo need return name Hikaru", () => {
    const nombre = "Hikaru";

    const hello = getSaludo(nombre);

    expect(hello).toBe(hello);
    console.log(hello);
  });

  // If argument if null getSaludo() return Hello Carlos

  test("getSaludo without argument ", () => {
    const Hello = getSaludo();

    expect(Hello).toBe(Hello);

    console.log(Hello);
  });
});
