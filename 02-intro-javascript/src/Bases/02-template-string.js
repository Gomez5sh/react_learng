// Ttemplate strings

const name = "Emmanuel";
const lastname = "Gomez";

//const completeName = name + ' ' + lastname;
const completeName = `${name} ${lastname}`;
console.log(completeName);

function getHello(name) {
    return "Hello" + name;
}

console.log(`This is a  text: ${getHello( name )}`);