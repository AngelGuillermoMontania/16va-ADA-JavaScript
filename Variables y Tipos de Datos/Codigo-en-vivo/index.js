//console.log(50)  //me permite imprimir por consola




/* ==========================
           DATOS PRIMITIVOS
========================== */

    /* String */
    /* console.log('Hello')
    console.log("Hello2") */
    /* console.log("70") */
    





    /* Number  */
    /* console.log(70)
    console.log(15846) */
    






    /* Boolean */
    /* console.log(true)   //1   Encendido
    console.log(false) */    //0   Apagado

    /* console.log(true) */






    /* Null */
    /* console.log(null) */  //No contiene, nulo
   






    /* Undefined */
    /* console.log(undefined) */    //No existe, no esta definido






    /* NaN  */
    //Not-a-Number
   







   
   /* console.log("true") */
   




    /*  typeof */
   /* console.log(typeof false) */
   



/* ==========================
    VARIABLES
========================== */

/* var edad; // Declarar una variable
edad = 40; // Definir, darle un valor. En este ejemplo: Tipo numero
console.log(edad)  */ // Imprimir por consola


/* var nombre = "Ada";  // En este caso guardo un string
var apellido = "Lovelace"; */
/* var num1 = 5;
var num2 = 10;
console.log("primer console.log", num1);
num1 = 800;
console.log("segundo console.log", num1); */

/* var nombre = "Ada";
console.log(nombre)
nombre = "Meli";
console.log(nombre) */












//var es una variable, que puedo modificar y tiene scope global




//let y const

/* let saludo = "Hello";
//let es una variable, mas debil que puedo modificar y tiene limite de scope
saludo = "Bye";
console.log(saludo); */



/* const inicio = "Hello";
// const es una variable, no se puede modificar y tiene limite de scope
console.log(saludo) */










/* ==========================
OPERADORES DE ASIGNACIÓN
========================== */

//El operador "=" sirve para asignar un valor
// += , -=

/* let edad = 40 */



/* ==========================

OPERADORES ARITMÉTICOS

========================== */

// Nos permiten hacer operaciones matemáticas
/* 
    10 + 15 //---> Suma
    10 - 15 //---> Resta
    10 * 15 //---> Multiplicación
    10 / 15 //---> División
    15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
    15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1
*/
//console.log(3 % 2);
/* console.log("Hola " + "chicas") */





/* ==========================

OPERADORES DE COMPARACIÓN SIMPLE
se declara ==, !=

========================== */
/* 
10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad
 */
//console.log(10 != 15)
/* Cuando comparo, responde con booleanos */

// !     =======>   NOT



/* ==========================

OPERADORES DE COMPARACIÓN ESTRICTA
se declara ===, !==

========================== */
/* 
10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo
 */
/* console.log(15 === "15") */






/* ==========================
OPERADORES RELACIONALES
========================== */

/* 15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor o igual que...
15 < 10  //---> Menor que...
15 <= 10  //---> Menor o igual que...

console.log("hola" + " " + 15)   */








/* ==========================

OPERADORES LÓGICOS

and  -----> && ----> y
or   -----> || ----> o

========================== */

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// && Todos sus valores deben evaluar como TRUE
/* (10 === 15) && (10 === 20) */
//   false  &&    false
//          false
/* console.log(10 === "10" && 20 !== 20) */



/* console.log((10 > 15) && (10 != 20)) */



/* console.log(1 == 1 && 2 == 5) */




// || (OR) Solo un valor debe evaluar como TRUE para que la expresión sea TRUE

/* (10 > 15) || (10 != 20) */ //---> TRUE porque 10 != 20 es verdadero



console.log((1 === "1" || 2 !== 8) && 7 !== "7")
//                 (true)           y  true
//                          true

// !(NOT) - Niega la condición, TRUE pasa a FALSE y FALSE a TRUE
console.log(!true)










/* ==========================

Template Strings

========================== */

/* const saludo = "Hola"
const nombre = "Carla";


console.log(`${saludo} 
${nombre}`) */
//console.log(saludo + " " + nombre)

/* console.log(saludo + " " +
nombre) */



/* let color = 'Verde';
let noEsRojo = !(color == 'Rojo'); */
//             !(       false   )
//              true

/* console.error("Un nuevo error") */
/* console.log(noEsRojo) */

    /* console.log(5 == "5")
    console.log(5 === "5") */
    /* console.log(5 == "7") */ //false
    /* console.log("5" !== 5) */

    /* console.log("hello " + 5) */            
    /* =======>   Convierte el 5 que esta del tipo number a tipo string */


    //console.log(1 == true)
    //console.log(undefined == null)
    //console.log(undefined === null)
    //console.log(3 - "1")     //2
    // pero...
    //console.log(3 + "1") 

    //console.log(hello)

    /* EcmaScript6
    let, const */

    /* const nombre = "Guille";
    nombre = "Alberto" */

    /* let nombre = "Guille"
    nombre = "Alberto"
    const edad = 17
    const saludar = `Hola! ${nombre}, soy de Jujuy, tengo ${edad}` */








    

/* console.log("FUNCIONO PERFECTO, ME LINKIE") */

/* alert("Hace click aca para ganar un millon de dolares?") */
/* const datosDeRobo = prompt("Dame tu dni y cbu y te paso 5 millones de dolares?")
console.log(datosDeRobo) */
/* const edad = prompt("Cual es tu edad?")
const nombre = prompt("Cual es tu nombre?")
console.log(`Hola, tu tienes ${edad} y te llamas ${nombre}`) */
