/* function saludar (nombre, apellido) {
    return `Hola ${nombre} ${apellido}!`
}

console.log(saludar("Ada", "Lovelace"))
console.log(saludar("Angel", "Montania"))
console.log(saludar("Mel", "Moreno")) */
/* let nombre = "Hola"

function calcularGastos (num1, num2, num3) {
    let gastoUno = num1;
    let gastoDos = num2;
    let gastoTres = num3;
    return gastoUno + gastoDos + gastoTres;
} */




/* 
        FUNCIONES NOMBRADAS Y ANONIMAS
*/
/* function saludar (nombre) {
    return "Hola " + nombre;
} */

/* const saludar = function (nombre) {
    return  "Hola " + nombre;
}

console.log(saludar("Ada")) */

/* 
    console.log()   ----> Solo muestra por consola lo que este entre los parentesis
    return  ------>   Saca informacion de dentro de una funcion
*/






/* 
        FUNCIONES FLECHA
*/
//    >=   <=
/* function saludar (nombre) {
    return "Hola " + nombre;          
} */

/* const saludar = nombre => "Hola " + nombre

console.log(saludar("Ada")) */

// Si el parametro es solo uno, no hace falta que coloque parentesis (), Si es mas de uno o ninguno si debe llevar parentesis
// Si la funcion solo retorna algo (Hace una sola cosa), no hace falta que ponga llaves ni el return
// Si es mas de una instruccion en el cuerpo de la funcion, si lleva llaves y si lleva return


function esPar (num) {
    return num % 2 === 0
}

console.log(esPar(10))
console.log(esPar(5))