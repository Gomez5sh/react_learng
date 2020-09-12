//arrays

//const arr = new Array(100);
//arr.push(100)
const arr = [1, 2, 3, 4];

let arr2 = [...arr, 5];

const arr3 = arr2.map(function (number) {
    return number * 2;
});



console.log(arr);
console.log(arr2);
console.log(arr3);