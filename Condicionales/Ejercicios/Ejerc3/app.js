function puedeAvanzar(colorSemaforo) {
     
    if( colorSemaforo === "verde") {
        return true
    } else if (colorSemaforo === "rojo" || colorSemaforo === "amarillo") {
        return false
    } else {
        return "Error: no es un color valido"
    }
}