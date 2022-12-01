/* Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo */

// Usar 3 prompt por separado, seran destinos
// Otros 3 prompt con la duracion de cada uno
// Al final un alert, que muestre todas las escalas con su duracion, y duracion total

/* 
    un prompt = escala uno
    prompt = duracion escala uno
    prompt = escala dos
    prompt = duracion de escala
    prompt = escala tres
    prompt = duracion de escala

    alert("Muestre escala uno y duracion
    escala dos y duracion
    escala tres y duracion,
    El total de duracion
    ")
*/

const lugarEscalaUno = prompt("Indique escala 1")
const duracionEscalaUno = prompt("Indique la duracion de escala uno")
const lugarEscalaDos = prompt("Indique escala 2")
const duracionEscalaDos = prompt("Indique la duracion de escala dos")
const lugarEscalaTres = prompt("Indique escala 3")
const duracionEscalaTres = prompt("Indique la duracion de escala tres")

/* const duracionTotal = Number(duracionEscalaUno) + Number(duracionEscalaDos) + Number(duracionEscalaTres) */

alert(`Escala uno: ${lugarEscalaUno}, duracion: ${duracionEscalaUno}
Escala dos: ${lugarEscalaDos}, duracion: ${duracionEscalaDos}
Escala tres: ${lugarEscalaTres}, duracion: ${duracionEscalaTres},
y la duracion total es: ${parseInt(duracionEscalaUno) + parseInt(duracionEscalaDos) + parseInt(duracionEscalaTres)}
`)