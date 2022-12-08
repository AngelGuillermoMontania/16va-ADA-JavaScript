const nombres = [ "Ada", "Mel", "Angel", "JS", "dsa", "Dsa", "Dsadas", "dsadhjasgj"] 

//                  0      1      2        3     

nombres.length //8
// Length muestra la cantidad de datos
// El indice es la posicion en la que se encuentra cada dato

console.log(nuevoArray)
nuevoArray.push("producto4")   //Agregamos un elemento al final
console.log(nuevoArray)   // [ 'producto1', 'producto2', 'producto3', 'producto4' ]
nuevoArray.pop()       //Eliminar el ultimo elemento
console.log(nuevoArray)

nuevoArray.unshift("producto que no imaginaba") //Agrega al principio
console.log(nuevoArray)
nuevoArray.shift() // Elimina el primero

const arrayConJoin = nuevoArray.join("-")   // Une en un solo string separado por el string que indiquemos como parametro, por defecto separa con coma
console.log(arrayConJoin)
// "producto1-producto2-producto3"

const indiceDondeSeEncuentraJs = nombres.indexOf("JS")  // 3    -1

nombres.includes("JS")     // true
nombres.includes("Python") //false


/* console.log(nombres[indiceDondeSeEncuentraJs]) */