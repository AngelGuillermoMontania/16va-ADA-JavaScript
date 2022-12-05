/* Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres. 

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true

retornar true if edad >= 15 o si tieneAutorizacion === true

*/

function puedeVerPelicula (edad, tieneAutorizacion) {

    if(edad >= 15 || tieneAutorizacion) {
    //if(    false   ||        true  )
        return true
    } else {
        return false
    }

}

console.log(puedeVerPelicula(12, false))