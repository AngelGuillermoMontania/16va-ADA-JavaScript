//const saludo = "Me gusta Python "
//console.log(saludo.length)  // lenght   Go To Hell ---- Gallina Tiene Huevos
//console.log(saludo.replace("Python", "JavaScript"))
//console.log(saludo.toLowerCase())
//console.log(saludo.toUpperCase())
//console.log(nombre.concat(" ".concat(saludo)))
//          nombre.concat(" Me gusta Python")
//             Angel Me gusta Python
//console.log(saludo.includes("Python"))
//console.log(saludo.repeat())

//const num = 50;
//console.log(num.toString())
// API   ------> Math
//console.log(Math.floor(num))   //      -------> Redondea hacia abajo
//console.log(Math.ceil(num))    //      -------> Redonde hacia arriba
//console.log(Math.round(num))     //      ------->  Redondea hacia el entero mas cercano
//console.log(Math.random())   // ------>   Devuelve entre 0.01 y 0.99

//console.log(Number.isInteger(num))
//console.log(Number.parseFloat(num))






const edad = 30;





/* if (condición) {
    // código a ejecutar si la condición es verdadera
} */

/* if (edad >= 18) {  // Si es True se ejecuta lo que esta entre llaves, si no, JS lo saltea y no entra en las llaves
    console.log("Si puede pasar, es mayor de edad")
} else {  // Si no, entra en las llaves
    console.log("No no puede pasar, es menor de edad")
} */

/* 
if (edad > 18 && edad < 120) {
    console.log("Si puede pasar, es mayor de 18 años")
} else if (edad === 18) {
    console.log("Puedes pasar, tienes 18 exactos")
} else if (edad === 17 || edad === 16) {
    console.log("Puedes pasar, pero solo con autorizacion de tus padres")
} else if (edad <= 0) {
    console.log("Disculpame, no podrias ser un humano")
} else {
    console.log("No no puede pasar, es menor de edad")
} */

/* condicion ? codigo a ejecutar si es true : codigo a ejecutar si es false */

const PuedePasar = edad > 18 ? "Si es mayor" : "No, no es mayor";


/* edad < 0 ? console.log("es menor a 0") : console.log("Es mayor o igual a 0") */

const nombre = "Angel";
const suNombreEsAngel = nombre === "Angel" ? true : false;
console.log(suNombreEsAngel)




/* if(edad > 18) {
    console.log(true)
} else {
    console.log(false)
} */


//   ||   or    o
//   &&   and   y



// --------------- SWITCH --------------
/* switch (key) {
    case value:
        
        break;
        default:
            
            break;
        } */




/* 
switch (edad) {
    case edad > 18:
        console.log("Si puede pasar, es mayor de 18 años");
        break;
    case edad <= 0:
        console.log("Disculpame, no podrias ser un humano");
        break;
    default:
        console.log("No, no puede pasar, es menor de edad");
        break;
}
 */



// switch al comenzar se demora un poco pero es mas rapido una vez que inicio
// if else if else comienza mas rapido pero es mas lento una vez que inicio