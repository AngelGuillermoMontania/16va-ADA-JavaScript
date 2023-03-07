const $containCharacters = document.querySelector(".contain-cards")
const $form = document.querySelector(".contain-cards")


const getAllCharacters = () => {
    fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(data => {
            paintCards(data)
        })
        .catch(error => console.log(error))
}

const paintCards = (array) => {
    $containCharacters.innerHTML = ""
    array.forEach(character => {
        $containCharacters.innerHTML += `<div class="card">
            <img src=${character.imageUrl}>
            <p>${character.fullName}</p>
            <p>${character.title}</p>
            <p>${character.family}</p>
            <div class="contain-buttons"><button class="btn-edit" id=${character.id}>Edit</button><button class="btn-delete" id=${character.id}>Delete</button></div>
        </div>`
    });
    const $buttonsDelete = document.querySelectorAll(".btn-delete")
    const $buttonsEdit = document.querySelectorAll(".btn-edit")
    eventsDeleteCharacters($buttonsDelete)
    eventsEditCharacters($buttonsEdit)
}

const eventsDeleteCharacters = (arr) => {
    arr.forEach(btn => {
        btn.addEventListener("click", () => {
            fetch(`http://localhost:3000/characters/${btn.id}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(data => {
                    $modalDelete.classList.add("show")
                })
                .catch(error => console.log(error))
        })
    })
}

const eventsEditCharacters = (arr) => {
    arr.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = `http://127.0.0.1:5500/edit.html?id=${btn.id}`
        })
    })
}

window.addEventListener("load", () => {

    getAllCharacters()
        


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