let datos = []

window.addEventListener("load", () => {
    
    /* CARGO LA VARIABLE DATOS CON LOCAL STORAGE */
    datos = JSON.parse(localStorage.getItem("datos"))
    //      JSON.parse(informacion de local storage )
    //          [{}, {}, {}]

    /* NODOS DEL HTML */
    const $form = document.querySelector(".form")
    const $inputTitle = document.querySelector("#title")
    let $containTitles = document.querySelector(".contain-title")

    /* FUNCTION PAINT */
    function paint () {
        $containTitles.innerHTML = "";
        datos ? datos.forEach((porCadaDato) => {
            $containTitles.innerHTML += `<div>
                <p>${porCadaDato.title}</p>
                <button class="delete" id="${porCadaDato.id}">Delete</button>
            </div>`
        }) : ""
        $buttonsDelete = document.querySelectorAll(".delete")
        $buttonsDelete.forEach(btn => btn.addEventListener("click", (e) => {
            datos = datos.filter(cadaUno => cadaUno.id !== e.target.id)
            localStorage.setItem("datos", JSON.stringify(datos))
            paint()
        }))
    }

    paint()
    
    /* CREACION DE UN TITULO */
    $form.addEventListener("submit", (e) => {
        e.preventDefault()
        datos.push({id: crypto.randomUUID(), title: $inputTitle.value})
        console.log(datos)
        sessionStorage.getItem
        localStorage.setItem("datos", JSON.stringify(datos))
        paint()

/* 
            localStorage si encuentra que ya existe ese nombre de clave/key.
            En el valor de esa key/clave remplaza por lo nuevo
            localStorage += {"datos", [{}]}
*/
    })

    /* 
    key           value
    datos           [{}, {}]
    */
})




// 