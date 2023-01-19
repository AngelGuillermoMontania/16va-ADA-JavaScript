function $(element) {
    return document.querySelector(element)
};

window.addEventListener('load', function () {

    // Formulary of edition
    let $form = $('.form');
    let $formErrors = $("#submitErrors")

    // Title
    let $title = $('#title');
    let $titleErrors = $('#titleErrors');

    // State
    let $state = $('#state');
    let $stateErrors = $('#stateErrors');

    // Modal
    const $openModal = $("#create")
    const $closeModal = $("#close")
    const $modalCreate = $(".contain-modalCreate")

    // Regular expressions
    let regExAlpha = /^[a-zA-Z0-9-\sñáéíóúüª!:?'¡].{5,50}$/;
    let regExAlphaText = /^[a-zA-Z0-9-\sñáéíóúü:=%&$·"!¿/[ª!?'¡].{20,500}$/;

    let validationErrors = false;

    $openModal.addEventListener("click", () => {
        $modalCreate.classList.add("show-modal")
    })
    $closeModal.addEventListener("click", () => {
        $modalCreate.classList.remove("show-modal")
    })
    
    $form.addEventListener("submit", (e) => {
        
        let errors = false
        e.preventDefault()

        if($title.value.length <= 5) {
            $titleErrors.innerHTML = "No es un titulo valido"
            errors = true
        } else {
            $titleErrors.innerHTML = ""
        }
        if($state.value == "") {
            $stateErrors.innerHTML = "No es un estado valido"
            errors = true
        } else {
            $stateErrors.innerHTML = ""
        }

        if(!errors) {
            console.log("SUBMIT PERFECTO")
        }
        
    })

})