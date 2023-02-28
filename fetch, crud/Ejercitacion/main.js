const $containCharacters = document.querySelector(".contain-cards")
const $form = document.querySelector(".contain-cards")

window.addEventListener("load", () => {

    fetch("http://localhost:3000/characters")
        /* Completar para pintar todos los personajes
        Plantilla de card: 
            <div class="card">
                <img src="https://thronesapi.com/assets/images/olenna-tyrell.jpg">
                <p>Primer y segundo nombre</p>
                <p>title</p>
                <p>family</p>
                <div class="contain-buttons"><button class="btn-edit" id={id}>Edit</button><button class="btn-delete" id=${}>Delete</button></div>
            </div>
        `
        AGREGAR EVENTO PARA ELIMINAR
        AGREGAR EDICION EN OTRO HTML
        */


    $form.addEventListener("submit", (e) => {
        e.preventDefault()

        /* Completar con fetch y post a http://localhost:3000/characters*/
    })
})