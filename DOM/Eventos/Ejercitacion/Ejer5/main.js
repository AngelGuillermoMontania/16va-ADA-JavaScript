const paises = [
    {
        pais: "Argentina"
    },
    {
        pais: "Francia"
    },
    {
        pais: "Croacia"
    }, 
    {
        pais: "Marruecos"
    },
    /* 
    {
        pais: "Brasil"
    }
    */
]

const $main = document.querySelector(".main")
const $buttonDelete = document.querySelector("#delete")
const $buttonCreate = document.querySelector("#create")

const paint = () => {
    $main.innerHTML = ""
    paises.forEach(elem => {
        $main.innerHTML += `
            <p>Pais: ${elem.pais}</p>
        `
    })
}

paint()

$buttonDelete.addEventListener("click", (e) => {
    paises.pop()
    paint()
})

$buttonCreate.addEventListener("click", () => {
    const paisNuevo = prompt("Que pais deseamos agregar al final del array?")
    paises.push({pais: paisNuevo})
    $main.innerHTML = ""
    paises.forEach(elem => {
        $main.innerHTML += `
            <p>Pais: ${elem.pais}</p>
        `
    })
})