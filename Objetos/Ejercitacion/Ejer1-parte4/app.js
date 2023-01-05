const persona = {
    nombre: 'Grace',
    apellido: 'Hopper',
    email: 'grace.hopper@gmail.com',
    plan: 'premium'
};

const persona2 = {
    nombre: 'Angel',
    apellido: 'Montaña',
    email: 'grace.hopper@gmail.com',
    plan: 'premium'
};

const persona3 = {
    nombre: 'pepe',
    apellido: 'honguito',
    email: 'grace.hopper@gmail.com',
    plan: 'premium'
};
 
const obtenerNombreCompleto = (obj) => {
    return `${obj.nombre} ${obj.apellido}`
}

console.log(obtenerNombreCompleto(persona));
console.log(obtenerNombreCompleto(persona2));
console.log(obtenerNombreCompleto(persona3));