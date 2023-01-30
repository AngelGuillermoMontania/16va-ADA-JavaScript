const tareas = [
    {
        Titulo: "Aprender Js",
        Estado: "Pendiente"
    },
    {
        Titulo: "Aprender css",
        Estado: "En progreso"
    },
    {
        Titulo: "Aprender react",
        Estado: "Terminado"
    }
]

function $(elementoDeHtml) {
    return document.querySelector(elementoDeHtml)
}

window.addEventListener("load", () => {

    /* Modal */
    const $openButton = $("#open-modal")
    const $containModal = $(".contain-modal")
    const $closeButton = $("#close-modal")

    /* Contenedor de tareas*/
    const $containTareas = $(".contain-tareas")

    /* Botones de filtrado */
    const $filterPendient = $("#btn-filterPendient")
    const $filterInProgress = $("#btn-filterInProgress")
    const $filterFinish = $("#btn-filterFinish")
    const $all = $("#btn-all")

    /* Dark Mode (body) */
    const $body = $("body")
    const $btnDarkMode = $("#btn-darkMode")
    
    /* Eventos Modal */
    $openButton.addEventListener("click", (event) => {
        event.preventDefault();
        $containModal.classList.add("show-modal")
    })

    $closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        $containModal.classList.remove("show-modal")
    })
    
    $openButton.onClick = (event) => {
        event.preventDefault()
        $containModal.classList.add("show-modal")
    }

    /* Evento de dark-mode */
    
    $btnDarkMode.addEventListener("click", () => {
        $body.classList.toggle("dark-mode")
        if($body.classList.contains("dark-mode")) {
            $btnDarkMode.innerText = "🌞"
        } else {
            $btnDarkMode.innerText = "☽"
        }
    })

    /* Pintar las tareas cuando inicio la aplicacion */
    paint($containTareas, tareas)


    /* Funcion que se encarga de pintar */
    function paint (nodo, datos) {
        nodo.innerHTML = "";
        datos.forEach(tarea => {
            nodo.innerHTML += `<div class="card">
                <p>${tarea.Titulo}</p>
                <p>${tarea.Estado}</p>
                <button>Editar</button>
                <button>Eliminar</button>
            </div>`
        });
    }

    /* Lo que se ejecutara en primer lugar al iniciar la app */
    $filterPendient.addEventListener("click", () => {
        const arrayPendient = tareas.filter(tarea => tarea.Estado === "Pendiente")
        paint($containTareas, arrayPendient)
    })

    $filterInProgress.addEventListener("click", () => {
        const arrayInProgress = tareas.filter(tarea => tarea.Estado === "En progreso")
        paint($containTareas, arrayInProgress)
    })

    $filterFinish.addEventListener("click", () => {
        const arrayFinish = tareas.filter(tarea => tarea.Estado === "Terminado")
        paint($containTareas, arrayFinish)
    })

    $all.addEventListener("click", () => {
        const array = tareas
        paint($containTareas, array)
    })
})



