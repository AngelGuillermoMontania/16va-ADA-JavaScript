/* esHoraValida(hora)
Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true */
//   00:00
// 23:59
//   00


// Deberia separar solo la hora del string que me pasan
// Comparar que sea mayor o igual a 00 y menor o igual a 23

// const saludo = "Hola como estan"
// saludo.slice(0,-1)


function esHoraValida (hora) {

    const soloHora = hora.slice(0,2) 
    const soloMinutos = hora.slice(3,5)
    
    if ((Number(soloHora) >= 0 && Number(soloHora) <= 23) && (Number(soloMinutos) >= 0 && Number(soloMinutos) <= 59)) {
        return true
    } else {
        return false
    }

}

console.log(esHoraValida('12:23'))
console.log(esHoraValida('12:65')) 
console.log(esHoraValida('28:05')) 
console.log(esHoraValida('00:00'))