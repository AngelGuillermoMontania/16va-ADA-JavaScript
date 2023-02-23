/* console.log(new Date())  // Fecha actual tipo Date
console.log(new Date("2023-1-1")) // Me da la fecha en tipo date que indico como parametro
console.log(new Date().getDate())  // Me da el dia
console.log(new Date().getMonth() + 1)  // El mes
console.log(new Date().getFullYear())  // El año
console.log(new Date(operacion.Date) > new Date(inputFilterDate.value)) // Mas o menos lo que deberia retornar el filter
 */


































/* function primero () {
    return 2 + segundo()
}

function segundo () {
    return 5 + tercero()
}

function tercero () {
    return 4
}

console.log(primero())
console.log("LLEGUE SEGUNDO") */





//  Mientras traes la info
// Anda colocando los eventos

















/* function callbackHell () {
    return () => {
        return () => {
            return () => {
                return () => {
                    return () => {
                        return () => {
                            return () => {

                            }
                        }
                    }
                }
            }
        }
    }
}



const bool = true
if(bool) {
    if() {
        if() {
            if() {
                if() {
                    if() {
                        if() {

                        }
                    }
                }
            }
        }
    }
} */














//  PRIMERO   SEGUNDO    TERCERO
/* 
console.log("PRIMERO")
setTimeout(() => {
    console.log("SEGUNDO")
}, 10000)
console.log("TERCERO")
 */

/* setInterval(() => {
    console.log("Me ejecute")
}, 5000) */
/* setTimeout(() => {
    confirm("Para continuar navegando, PAGANOOOOS! UNA SUBSCRIPCION!")
}, 4000) */








// cuando tengas la informacion recien ahi pinta





//  espera a que llegue la info y recien termina con el js
// darkMode



// Te prometo que te traigo la info, reject("404 - Not found")


















/* let bool = false
const promesa = new Promise((response, reject) => {
    setTimeout(() => {
        if(bool) {
            response("PROMESA RESUELTA")
        } else {
            reject(Error("ERROR"))
        }
    }, 5000)
})
.then((data) => {
    return data
})
console.log(promesa)
setTimeout(() => {
    console.log(promesa)
}, 6000) */



/* 
•	Pendiente (pending): El estado inicial de un promise.
•	Completada (fullfilled): Representa que se completó de manera exitosa.
•	Rechazada (rejected): La operación terminó, pero de manera fallida.
 */
/* 
const bool = false;

new Promise((res, rej) => {   // Primer parametro cumplir, segundo parametro no cumple
    if(bool) {
        res(informacion)   // Resuelve la promesa
    } else {
        rej("ERROR")    // Rechaza o no cumple la promesa
    }
})
    .then(data => {   // Si la promesa se resuelve
        return console.log(data)
    })
    .catch(error => {  // Si la promesa falla
        return console.log(error)
    }) */

// https://bluelytics.com.ar/#!/api









const $contain = document.querySelector(".contain")
$contain.innerHTML = "LOADING..."



fetch(`https://api.bluelytics.com.ar/v2/latest`)
    .then(dataFormatHTTP => dataFormatHTTP.json())
    .then(info => {
        $contain.innerHTML = `<div class="card">
            <p>Dolar Blue a la venta: ${info.blue.value_sell}</p>
        <div>`
    })
    .catch(error => {
        $contain.innerHTML = `<h1>Error en el servidor</h1>`
    })