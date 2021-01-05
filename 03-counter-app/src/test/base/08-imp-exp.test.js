// imports
import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heros from "../../../src/data/heros";

//Describe
describe("Test of the 08-imp-exp", () => {
  // Test
  test("A hero must be return", () => {
    const id = 1;
    const hero = getHeroeById(id);

    const heroData = heros.find((h) => h.id === id);
    expect(hero).toEqual(heroData);
  });

  // Undefind
  test("if hero dosent exits must be return undefint", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  // task
  test("DC heros must be return ", () => {
    // Test owner
    const owner = "DC";
    const HOwner = getHeroesByOwner(owner);

    const ownerData = heros.filter((h) => h.owner === owner);
    expect(HOwner).toEqual(ownerData);
  });

  // task 2
  test("DC heros must be return ", () => {
    // Test owner
    const owner = "Marvel";
    const HOwner = getHeroesByOwner(owner);

    expect(HOwner.length).toBe(2);
  });
});
