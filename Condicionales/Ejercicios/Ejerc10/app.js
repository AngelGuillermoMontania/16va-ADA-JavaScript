/* obtenerSensacion(temperatura)
Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

Temperatura	Mensaje
Menor a 0°	¡Está helando!
Mayor o igual a 0° y menor a 15°	¡Hace frío!
Mayor o igual a 15° y menor a 25°	Está lindo
Mayor o igual a entre 25° y menor a 30°	Hace calor
Mayor o igual de 30°	¡Hace mucho calor!
obtenerSensacion(33) // "¡Hace mucho calor!"
 */

function obtenerSensacion (temperatura) {
    switch (Number.isInteger(temperatura)) {
        case temperatura < 0:
                return "¡Está helando!"
            break;
        /* if(temperatura < 0) {
            return "¡Está helando!"
        } */



        case temperatura >= 0 && temperatura < 15:
                return "¡Hace frío!"
            break;
        /* else if (temperatura >= 0 && temperatura < 15) {
            return "¡Hace frío!"
        } */



        case temperatura >= 15 && temperatura < 25:
                return "Está lindo"
            break;
        /* else if (temperatura >= 15 && temperatura < 25) {
            return "Está lindo"
        } */


        case temperatura >= 25 && temperatura < 30:
                return "Hace calor"
            break;
        /* else if (temperatura >= 25 && temperatura < 30) {
            return "Hace calor" 
        } */


        case temperatura >= 30:
                return "¡Hace mucho calor!"
            break;
        /* else if (temperatura >= 30) {
            return "¡Hace mucho calor!"
        } */


            
        default:
                return "No es una temperatura a evaluar"
            break;
        /* else {
            return "No es una temperatura a evaluar"
        } */
    }


    /* if(temperatura < 0) {
        return "¡Está helando!"
    } else if (temperatura >= 0 && temperatura < 15) {
        return "¡Hace frío!"
    } else if (temperatura >= 15 && temperatura < 25) {
        return "Está lindo"
    } else if (temperatura >= 25 && temperatura < 30) {
        return "Hace calor" 
    } else if (temperatura >= 30) {
        return "¡Hace mucho calor!"
    } else {
        return "No es una temperatura a evaluar"
    }*/
}