//Import and export
import {
    heros,
} from "../data/heros";

//console.log(owners);

//CALLBACK FIND

const getHeroById = (id) => {
    return heros.find((heros) => heros.id === id)
};

//console.log(getHeroById(5));

//CALLBACK FILTER

const getHerosByOwner = (owner) => {
    return heros.filter((heros) => heros.owner === owner);
};

//console.log(getHerosByOwner('DC'));

export {
    getHeroById as
    default,
    getHerosByOwner,
}