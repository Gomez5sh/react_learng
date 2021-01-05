import { getHeroeByIdAsync } from "../../base/09-promesas";
import heros from "../../data/heros";

describe("Pruebas con promesas", () => {
  test("Debe retornar un heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heros[0]);
      done();
    });
  });

  test("Debe de dar error si el heroe no existe ", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
