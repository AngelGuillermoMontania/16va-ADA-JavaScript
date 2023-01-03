const persona1 = {
    nombre: "Angel",
    apellido: "Montaña",
    edad: 30,
    serVivo: true,
    provincia: "San Juan"
}

const persona2 = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 16,
    serVivo: false,
    provincia: "Cualquiera"
}

const persona3 = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 16,
    serVivo: false,
    provincia: "Cualquiera"
}

const persona4 = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 16,
    serVivo: false,
    provincia: "Cualquiera"
}

// console.log(persona.serVivo)

// console.log(persona["apellido"])

const personas = [
    {
        nombres: {
            first_name: "Angel",
            second_name: "Guillermo"
        },
        apellido: "Montaña",
        edad: 30,
        serVivo: true,
        provincia: "San Juan",
        nacionalidad: ["USA", "Rusia"]
    }, 
    {
        nombre: "Ada",
        apellido: "Lovelace",
        edad: 16,
        serVivo: false,
        provincia: "Cualquiera"
    }
]

const celular = {
    marca: "Samsung",
    anio_fabricacion: 2022,
    color: "Blanco",
    funciona: true,
    rendimiento: ["8gb", "giroscopio"]
}

/* for (const key in celular) {
    console.log(`${key}: ${celular[key]}`)
}
 */
// key, en español es clave

const clavesDeCelular = Object.keys(celular)
console.log(clavesDeCelular)

const valoresDeCelular = Object.values(celular)
console.log(valoresDeCelular)

const entries = Object.entries(celular)
console.log(entries)