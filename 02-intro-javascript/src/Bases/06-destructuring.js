//destructuring
const person = {
    name: 'Bruce',
    age: '45',
    id: 'Batman',
};

/*const {
    name,
    age,
    id
} = person;*/

//console.log(name, age, id)

const useConstext = ({
    name,
    age,
    id,
    Universe = 'DC',
}) => {

    //console.log(name, age, id, Universe)
    return {
        nameId: id,
        anios: age,
        latlng: {
            lat: 15.325,
            lng: 151.9269,
        }
    }
};

const {
    nameId,
    anios,
    latlng: {
        lat,
        lng
    }
} = useConstext(person);

console.log(nameId, anios, lat, lng);