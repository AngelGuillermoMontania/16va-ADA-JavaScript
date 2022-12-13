//   Bonito, feo y mas usado, mas personalisable, mas sofisticado



/*    WHILE */
/* let count = 1 */

/* while (condition) {
    codigo a ejecutar
} */

/* 
while (count >= 1) {
    console.log(count)
    count += 1
}
 */



/*       DO WHILE */
/* do {
    codigo a ejecutar
} while (condicion) {
    condicion de parada
} */
/* 
do {
    console.log(count)
    count += 1
} while (count <= 10) {
    console.log("FINAL")
}
*/


/*       BUCLE FOR */

/* for(variable inicio; condicion; modificador de variable) {
    codigo a ejecutar
} */
/* 
for(let count = 1; count <= 10; count += 1) {
    console.log(count)
}
 */
// variable inicio solo se guarda al inicio del for
// La condicion, lo hace siempre al inicio antes del codigo a ejecutar
// Modificador de variable lo hace siempre al finalizar el codigo a ejecutar




const nombres = ["Ada",        "Mel",  "Angel",   "Lovelace"]
//             nombres[0]    nombres[1]      nombres[2]
/* 
for(let index = 0; index < nombres.length; index += 1) {
//                  0    <    3    ;  index += 1
// Ejecucion de codigo
//                  1    <    3    ;  index += 1
// Ejecucion de codigo
//                  2    <    3    ;  index += 1
// Ejecucion de codigo
//                  3    <    3   
//     NO EJECUTA MAS, CORTA EL FOR POR QUE DIO FALSE LA CONDICION

    console.log(nombres[index])
}

 */

/* for (let index = 0; index < nombres.length; index += 1) {
    if(nombres[index] === "Angel") {
        console.log("Se encuentra Angel en el array")
    }
} */

/* const apellido = "Lovelace"

for (let index = 0; index < apellido.length; index += 1) {
    if(apellido[index] === "c") {
        console.log("Se encuentra la c minuscula")
    }
} */

/* 

let count = 0;
const numeros = [20, 20, 20, 10, 5, 50, 500, 100]

for(let index = 0; index < numeros.length; index += 1) {
    count = count + numeros[index];
} 

*/