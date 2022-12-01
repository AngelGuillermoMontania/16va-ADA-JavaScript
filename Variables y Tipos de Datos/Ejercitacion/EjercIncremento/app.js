/* Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.) */

// prompt que ingrese un num
// prompt que pida la cantidad a incrementar
// mostrar 5 mensajes con el num del mensaje (1,2,3,4,5) + el total incrementado

let numInicial = prompt("Ingrese su numero de partida")
// 3
let numAIncrementar = prompt("Cuanto quiere aumentar cada vez")
// 5

num = num + numAIncrementar  // num = 8
alert(`Incremento 1) Total: ${num}`) // 8
num = num + numAIncrementar // 13
alert(`Incremento 2) Total: ${num}`) // 13
num = num + numAIncrementar // 18
alert(`Incremento 3) Total: ${num}`) // 18
num = num + numAIncrementar // 23
alert(`Incremento 4) Total: ${num}`) // 23
num = num + numAIncrementar // 28
alert(`Incremento 5) Total: ${num}`) // 28

/* alert(`Incremento 1) Total: ${num + numAIncrementar}`) // 8
num = num + numAIncrementar  // num = 8
alert(`Incremento 2) Total: ${num + numAIncrementar}`) // 13
num = num + numAIncrementar // 13
alert(`Incremento 3) Total: ${num + numAIncrementar}`) // 18
num = num + numAIncrementar // 18
alert(`Incremento 4) Total: ${num + numAIncrementar}`) // 23
num = num + numAIncrementar // 23
alert(`Incremento 5) Total: ${num + numAIncrementar}`) // 28 */