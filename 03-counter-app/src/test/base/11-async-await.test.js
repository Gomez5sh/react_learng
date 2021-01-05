import { getImagen } from "../../base/11-async-await";

describe("Pruebas en funciones async con await y fetch", () => {
  test("debe retornar URL de la imagen ", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });
});
