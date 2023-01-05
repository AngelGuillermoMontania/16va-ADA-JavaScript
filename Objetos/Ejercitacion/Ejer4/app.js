// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

const personas = [
    {
        id: 1,
        email: "ada@gmail.com",
        nombre: "Ada Lovelace",
        telefono: "1234567890",
    },
    {
        id: 2,
        email: "grace@hotmail.com",
        nombre: "Grace Hopper",
        telefono: "0987654321",
    }
]

console.log(personas[0].nombre);
console.log(personas[1].telefono)
console.log(personas[0].email)