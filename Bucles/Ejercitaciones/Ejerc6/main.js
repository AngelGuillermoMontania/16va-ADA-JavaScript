/* repetirLetras(palabra, cantidad)
Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

repetirLetras('hola', 2) // 'hhoollaa'
repetirLetras('ada', 3) // 'aaadddaaa'
repetirLetras('ah!', 5) // 'aaaaahhhhh!!!!!'
repetirLetras('basta', 1) // 'basta'
 */

// crear nuevoString, iterar la palabra que me pasen como parametro,
// dentro del for una variable aux, la letra que itero la repito y la agrego a la nuevoString

const repetirLetras = (palabra, cantidad) => {
    let nuevaPalabra = "";
    for (let index = 0; index < palabra.length; index++) {
        const aux = palabra[index].repeat(cantidad);
        nuevaPalabra += aux;
    }
    return nuevaPalabra;
}

/* function repetirLetras (palabra, cantidad) {
    let nuevaPalabra = "";
    for (let index = 0; index < palabra.length; index += 1) {
        const aux = palabra[index].repeat(cantidad);
        nuevaPalabra = nuevaPalabra + aux;
    }
    return nuevaPalabra;
} */