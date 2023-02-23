const bool = true

new Promise(resolve, reject => {
    if(bool) {
        resolve("PROMESA CUMPLIDA CON EXITO")
    } else {
        reject("ERROR -- PROMESA RECHAZADA")
    }
})
    .then((info) => {
        console.log(info)
    })
    .catch(error => {
        return console.log(error)
    })



// Resuelto   --- FullFilled
// Rechazada  --- Reject
// Pendiente o en proceso  --- Pending