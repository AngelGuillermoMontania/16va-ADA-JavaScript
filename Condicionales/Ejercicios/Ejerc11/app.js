/* jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate! */

function jugarPiedraPapelTijera(a, b) {

    if((a === "tijera" && b === "piedra") || (a === "piedra" && b === "tijera")) {
        return "¡Ganó piedra!"
    } else if ((a === "papel" && b === "piedra") || (a === "piedra" && b === "papel")) {
        return "¡Ganó papel!"
    } else if ((a === "papel" && b === "tijera") || (a === "tijera" && b === "papel")) {
        return "¡Ganó tijera!"
    } else {
        return "¡Empate!"
    }

}