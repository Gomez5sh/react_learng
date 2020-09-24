// 02

const nombre = "Fernando";
const apellido = "Herrera";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

//console.log( nombreCompleto );

function getSaludo(nombre = "Carlos") {
  return "Hello" + " " + nombre;
}

export { getSaludo as default };
//console.log('Este es un texto: ${ getSaludo( nombre ) }  ` );
