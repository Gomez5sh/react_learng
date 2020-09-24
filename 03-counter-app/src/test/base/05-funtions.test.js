// import
import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

//Description
describe("Test in 05-funtios.js", () => {
  // Test funtios
  test("getUser need to return a object ", () => {
    const userTest = {
      uid: "ABC123",
      username: "Gomez5sh",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  // getUsuarioActivo need to return a objec

  test("getUsuarioActivo need return a objet", () => {
    const nombre = "Gomez5Sh";
    const userAcTest = {
      uid: "ABC567",
      username: nombre,
    };
    const User = getUsuarioActivo(nombre);
    expect(User).toEqual(userAcTest);

    console.log(User);
    console.log(userAcTest);
  });
});
