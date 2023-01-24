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

    /* Eventos Modal */
    $openModal.addEventListener("click", () => {
        $modal.classList.add("show-modal")
    })

    $closeModal.addEventListener("click", () => {
        $modal.classList.remove("show-modal")
    })



    /* Validacion Formulario */

    $form.addEventListener("submit", (event) => {

        console.log("Hice click en Crear")

        // Prevengo el comportamiento por default
        event.preventDefault()

        //Una variable que llevara el control de los errors
        let errors = false
        // Si tengo errores llegara al final con true
        // Si NO tengo errores llegara al final con false

        console.log("Errors esta en antes de validar", errors)
        console.log($title.value)

        // Validacion titulo
        if($title.value.length <= 5) { // Si entra en el if hay un error
            $titleErrors.innerText = "Necesito mas de 5 caracteres"
            $titleErrors.style.color = "red";
            $titleErrors.style.fontSize = "10px";
            errors = true
        } else {
            $titleErrors.innerText = ""
        }

        console.log("Errors esta en dspues de validar titulo", errors)
        console.log($state.value)

        // Validacion estado 
        if($state.value == "") { // Si entra en el if hay un error en estado
            $stateErrors.innerText = "No seleccionaste ningun estado"
            $stateErrors.style.color = "red";
            $stateErrors.style.fontSize = "10px";
            errors = true
        } else {
            $stateErrors.innerText = ""
        }
        console.log("Errors esta en dspues de validar estado", errors)
        // primer prueba error = true


        // errors = false si no hay errores
        // errors = true, por que si hay errores

        if(errors) {
            console.log("AUN TENEMOS ERRORES")
        }
    })

})
