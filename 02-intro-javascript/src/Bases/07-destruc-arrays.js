//destructuring in arryas

const characters = ['Drogon', 'Viserion', 'Rhaegal'];

const [, , d3] = characters;

console.log(d3);

const returnArray = () => {
    return ["ABCD", 1234];
}

const [arra, num] = returnArray();

console.log(num, arra);

//task 02:

const useState = (value) => {
    return [value, () => {
        console.log('Hello World')
    }];
};

const [
    name, setName
] = useState('Jhon');
console.log(name);
setName();