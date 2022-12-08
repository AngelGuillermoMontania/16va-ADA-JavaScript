/* esPositivoONegativo(numero)
Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo' */

function esPositivoONegativo (numero) {

    if(numero >= 0) {
        return "positivo"
    } else {
        return "negativo"
    }

}

/* const esPositivoONegativo = numero => {
    if(numero >= 0) {
        return "positivo"
    } else {
        return "negativo"
    }
}
 */