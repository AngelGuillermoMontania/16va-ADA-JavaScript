/* Crear una función generarEmail que tome como argumentos dos string usuario y dominio y retorne un string email con el formato usuario@dominio.com
 */
/* 
// function generarEmail (str1,str2) {
// devolver o retornar un texto = "str1@str2.com"
//}

//FUNCION TRADICIONAL
function generarEmail (usuario, dominio) {
    return `${usuario}@${dominio}.com`
}

// FUNCION FLECHA ------- Cuando es mas de un parametro lleva parentesis
const generarEmail = (usuario, dominio) => `${usuario}@${dominio}.com`



 */
















// Funcion tradicional
/* function generarEmail (usuario, dominio) {
    const email = `${usuario}@${dominio}.com`
    return email
} */


//Funcion flecha
// const inputdeUsuario = otroNombre
// const inputDominio = otroDominio

// mostrarle al usuario como quedo su email ya creado

const generarEmail = (usuario, dominio) => {
    const email = `${usuario}@${dominio}.com`
    return email
}

console.log(generarEmail("angel1992", "gmail"))



//  hey back, aqui te mando un nuevo email
// Lo va a guardar en su admin
// Admin, va a poder toda la informacion