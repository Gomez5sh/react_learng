//Funtions js

const hello = function (name) {
  return `Hello, ${name}`;
};

const hello2 = (name) => {
  return `Hello, ${name}`;
};

const hello3 = (name) => `Hello, ${name}`;

console.log(hello("Jhon"));
console.log(hello2("Fantasma"));
console.log(hello3("Valeryon"));

const getUser = () => ({
  uid: "DFF555",
  username: "Gomez5sh",
});

const user = getUser();
console.log(user);

// :D

const getUsuarioActivo = (name) => ({
  uid: "GDD45135",
  userName: name,
});

const usuarioActivo = getUsuarioActivo("Helena");

console.log(usuarioActivo);
