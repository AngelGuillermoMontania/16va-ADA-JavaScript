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

    /* Contenedores De tareas*/
    const $containPendient = $(".contain-pendient")
    const $containInProgress = $(".contain-inProgress")
    const $containFinish = $(".contain-finish")

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
    const tareasPendientes = tareas.filter(elem => elem.Estado === "Pendiente")
    paint($containPendient, tareasPendientes)

    const tareasEnProgreso = tareas.filter(elem => elem.Estado === "En progreso")
    paint($containInProgress, tareasEnProgreso)

    const tareasTerminadas = tareas.filter(elem => elem.Estado === "Terminado")
    paint($containFinish, tareasTerminadas)
})
