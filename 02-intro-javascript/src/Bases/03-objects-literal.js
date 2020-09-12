const character = {
    name: 'Luna',
    lastname: 'maria cadajos',
    age: '4',
    address: {
        city: 'Faraway',
        zip: 1215156541,
        lat: 9999.9999,
        lng: 9999.9999,
    }
};

console.log(character);
console.table(character);

const character2 = {
    ...character
};
character2.name = 'Aria';

console.log(character2);