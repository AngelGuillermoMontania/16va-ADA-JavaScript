/* esParOImpar(numero)
Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar */

/* function esParOImpar (numero) {
    if(numero % 2 === 0) {
        return "par"
    } else {
        return "impar"
    }
} */

const esParOImpar = numero => {
    
    switch (Number.isInteger(numero)) {
        case numero % 2 === 0:
            return "par"
            break;
        default:
            return "impar"
            break;
    }

}

