var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: false,
};

// Operador ternario    condicion ? si la condicion es true : si la condicion da false
datos.programa ? datos.lenguajeFavorito = "JavaScript" : ""


if(datos.programa) {
    datos.lenguajeFavorito = "JavaScript"
} else {

}

console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }