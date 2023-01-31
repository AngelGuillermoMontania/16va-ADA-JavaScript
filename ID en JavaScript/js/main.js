function $ (elem) {
    return document.querySelector(elem)
}

let tareas = [
    {
        id: 1,
        Titulo: "Estudiar Python",
        Estado: "Pendiente"
    },
    {
        id: 5,
        Titulo: "Aprender Angular",
        Estado: "En progreso"
    },
    {
        id: 6,
        Titulo: "Aprender Angular",
        Estado: "En progreso"
    }
]



window.addEventListener("load", () => {

    const $section = $(".contain-tareas")

    const $titleEdit = $("#titleEdit")
    const $stateEdit = $("#stateEdit")

    /* Modal */
    const $openModal = $("#create-modal")
    const $closeModalCreate = $("#close-modalCreate")
    const $closeModalEdit = $("#close-modalEdit")
    const $modalCreate = $(".contain-modalCreate")
    const $modalEdit = $(".contain-modalEdit")

    /* Eventos Modal */
    $openModal.addEventListener("click", () => {
        $modalCreate.classList.add("show-modalCreate")
    })

    $closeModalCreate.addEventListener("click", () => {
        $modalCreate.classList.remove("show-modalCreate")
    })

    $closeModalEdit.addEventListener("click", () => {
        $modalEdit.classList.remove("show-modalEdit")
    })




    
    const paint = (nodo, array) => {
        nodo.innerHTML = ""
        array.forEach(element => {
            nodo.innerHTML += `<div>
                <p>${element.Titulo}</p>
                <p>${element.Estado}</p>
                <button class="btn-delete" id=${element.id}>Eliminar</button>
                <button class="btn-edit" id=${element.id}>Editar</button>
            </div>`
        });

        /* Eliminacion */
        $btnDeleteTarea = document.querySelectorAll(".btn-delete")
        $btnDeleteTarea.forEach(button => {
            button.addEventListener("click", (e) => {
                tareas = tareas.filter(tarea => tarea.id !== Number(e.target.id))
                paint($section, tareas)
            })
        })

        /* Edicion */
        $btnEditTarea = document.querySelectorAll(".btn-edit")
        $btnEditTarea.forEach(button => {
            button.addEventListener("click", (e) => {
                $modalEdit.classList.add("show-modalEdit")
                const tareaAEditar = tareas.find(tarea => tarea.id === Number(e.target.id))
                $stateEdit.value = tareaAEditar.Estado
                $titleEdit.value = tareaAEditar.Titulo
            })
        })
    }
    
    paint($section, tareas)
})