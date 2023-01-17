const datos = [
    {
        edad: 17,
        familiar: "Salamandra",
        casa: "Hufflepuff",
        nombreCompleto: {
            nombre: "Ellis",
            apellido: "Reeves",
        },
        hechizoPreferido: "Expecto Patronum",
        materias: [
            {
                nombre: "Astronomía",
                promedio: 1,
            },
            {
                nombre: "Encantamientos",
                promedio: 6,
            },
            {
                nombre: "Defensa Contra las Artes Oscuras",
                promedio: 2,
            },
            {
                nombre: "Vuelo",
                promedio: 0,
            },
            {
                nombre: "Herbología",
                promedio: 2,
            },
            {
                nombre: "Historia de la Magia",
                promedio: 2,
            },
            {
                nombre: "Pociones",
                promedio: 8,
            },
            {
                nombre: "Transformaciones",
                promedio: 1,
            },
        ],
    },
    {
        edad: 15,
        familiar: "Salamandra",
        casa: "Gryffindor",
        nombreCompleto: {
            nombre: "Neal",
            apellido: "Spence",
        },
        hechizoPreferido: "Lumos",
        materias: [
            {
                nombre: "Encantamientos",
                promedio: 8,
            },
            {
                nombre: "Defensa Contra las Artes Oscuras",
                promedio: 6,
            },
            {
                nombre: "Vuelo",
                promedio: 7,
            },
            {
                nombre: "Herbología",
                promedio: 1,
            },
            {
                nombre: "Historia de la Magia",
                promedio: 3,
            },
            {
                nombre: "Pociones",
                promedio: 10,
            },
            {
                nombre: "Transformaciones",
                promedio: 5,
            },
        ],
    }
]

const $containCharacters = document.querySelector(".contain-characters")
const copiaDeDatos = [...datos]

copiaDeDatos.forEach(character => {

    const materiasAprobadas = character.materias.filter(materia => materia.promedio >= 6)
    character.materias = materiasAprobadas
    $containCharacters.innerHTML += `
        <div>
            <h5>Nombre</h5>
            <p>${character.nombre}</p>
            <h5>Hechizo preferido</h5>
            <p>${character.hechizoPreferido}</p>
            <h5>Edad</h5>
            <p>${character.edad}</p>
            <div class="materias">
                ${ mat(character.materias) }
            </div>
        </div>
    `

    const $materiasAprobadas = document.querySelector(".materias")
    character.materias.forEach(materia => {
        $materiasAprobadas.innerHTML += `
            
        `
    })
})

function mat (arr) {
    const str = ""
    arr.forEach(elem => {
        str += ``
    })
}

/* Copia por valor y copia por referencia */

/* Copia por valor es solo con datos primitivos */
/* let a = 5
let copiaDeNumero = a

copiaDeNumero += 2 */


/* Copia por referencia es solo con datos avanzados */
/* let a = ["Ada", "Mel"]
let copiaDeArray = [...a]

copiaDeArray.push("Angel")

console.log(a)
console.log(copiaDeArray) */
/* let auto = {motor: "1500cc", color: "Rojo"}
let copiaDeAuto = {...auto}

copiaDeAuto.color = "Azul"

console.log(auto)
console.log(copiaDeAuto) */

/* Spread Operator ...    ECMAScript6   */

/* const copiaDeDatos = [...datos] */