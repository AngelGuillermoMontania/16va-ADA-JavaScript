function $(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {

    /* Form */
    const $form = $(".form")
    const $formErrors = $("#formErrors")

    /* Title */
    const $title = $("#title")
    const $titleErrors = $("#titleErrors")

    /* State */
    const $state = $("#state")
    const $stateErrors = $("#stateErrors")

    /* Modal */
    const $openModal = $("#create-modal")
    const $closeModal = $("#close-modal")
    const $modal = $(".contain-modalCreate")

    /* Expresiones regulares */
    const regExpAlpha = /^[a-zA-Z0-9-\sñáéíóúüª!:?'¡].{5,20}$/

    /* Eventos Modal */
    $openModal.addEventListener("click", () => {
        $modal.classList.add("show-modal")
    })

    $closeModal.addEventListener("click", () => {
        $modal.classList.remove("show-modal")
    })

    $title.addEventListener("input", () => {
        console.log($title.value)
    })


    let validationErrors = false //Inputs
    

    /* Validacion Inputs */
    $title.addEventListener("blur", () => {

        /* .trim() pregunto si esta vacio */
        if(!$title.value.trim()) {
            $titleErrors.innerText = "El titulo es requerido"
            $titleErrors.style.color = '#ff0000'
            validationErrors = true
        } else if (!regExpAlpha.test($title.value)) { // testeo con la expresion regular
            $titleErrors.innerText = "El titulo no es valido, mas de 5 caracteres"
            $titleErrors.style.color = '#ff0000'
            validationErrors = true
        } else {
            $titleErrors.innerText = "El titulo es valido"
            $titleErrors.style.color = 'blue'
            validationErrors = false
        }
    })

    $state.addEventListener("blur", () => {
        if(!$state.value.trim()) {
            $stateErrors.innerText = "El estado es requerido"
            $stateErrors.style.color = '#ff0000'
            validationErrors = true
        } else if (!regExpAlpha.test($state.value)) {
            $stateErrors.innerText = "El estado no es valido"
            $stateErrors.style.color = '#ff0000'
            validationErrors = true
        } else {
            $stateErrors.innerText = "El estado es valido"
            $stateErrors.style.color = 'blue'
            validationErrors = false
        }
    })

    $form.addEventListener("submit", (event) => {

        event.preventDefault()

        let errors = false  //Formulario

        /* Accedo a todos los inputs y buttons del form */
        let elementsForm = $form.elements;

        /* elementsForm.length - 1 por que no quiero acceder al boton submit
        
        */
        for (let index = 1; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == "") {
                elementsForm[index].style.backgroundColor = 'red'
                $formErrors.style.color = 'red'
                $formErrors.innerText = "Los campos indicados son obligatorios"
                errors = true
            } else {
                elementsForm[index].style.backgroundColor = 'none'
            }
        }

        /* Pregunto si hay errores en los inputs o el form en general */
        if(!errors && !validationErrors) {
            tareas.push({Titulo: $title.value, Estado: $estado.value})
            $form.submit()
            paint()
        }
    })
})