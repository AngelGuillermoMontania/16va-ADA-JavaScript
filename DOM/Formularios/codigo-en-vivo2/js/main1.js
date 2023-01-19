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

    let validationErrors = false

    $form.addEventListener("submit", (event) => {
        event.preventDefault()
        let errors = false
        if($title.value.length <= 5) {
            $titleErrors.innerText = "Necesito mas de 5 caracteres"
            $titleErrors.style.color = "red";
            $titleErrors.style.fontSize = "10px";
            errors = true
        } else {
            $titleErrors.innerText = ""
        }


        if(errors) {
            /* no hagas nada */
        } else {
            /* Ahora si guardalo o submiteo */
        }
    })

})