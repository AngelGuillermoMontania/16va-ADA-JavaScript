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

    // Events modal create
    $openModal.addEventListener("click", () => {
        $modalCreate.classList.add("show-modal")
    })
    $closeModal.addEventListener("click", () => {
        $modalCreate.classList.remove("show-modal")
    })

    $title.addEventListener('blur', function(){
        if(!$title.value.trim()){
            $titleErrors.innerHTML = 'El título es obligatorio'
            $titleErrors.style.color = '#ff0000'
            $title.style.color = '#ff0000'
            validationErrors = true
        } else if (!regExAlpha.test($title.value)){
            $titleErrors.innerHTML = 'El título no es válido'
            $title.style.color = '#ff0000'
            $titleErrors.style.color = '#ff0000'
            validationErrors = true
        } else {
            $titleErrors.innerHTML = 'El título es valido'
            $title.style.color = '#2940D3'
            $titleErrors.style.color = '#2940D3'
            /* $title.style.backgroundColor = '#d8c371' */
            $title.style.border = 'none'
            validationErrors = false
        }
    })

    $state.addEventListener('change', function(e){
        console.log(e)
        if(!$state.value.trim()){
            $stateErrors.innerHTML = 'El estado es obligatorio'
            $state.style.color = '#ff0000'
            validationErrors = true
        } else if (e.target.children[1].value !== "Pendiente" || e.target.children[2].value !== "En progreso" || e.target.children[3].value !== "Terminado"){
            $stateErrors.innerHTML = 'El estado no es valido'
            $state.style.color = '#ff0000'
            validationErrors = true
        } else {
            $stateErrors.innerHTML = 'La estado es valido'
            $state.style.color = '#2940D3'
            /* $state.style.backgroundColor = '#d8c371' */
            $state.style.border = 'none'
            validationErrors = false 
        }
    })

    $form.addEventListener('submit', function(event){
        event.preventDefault();

        let error = false;

        let elementsForm = this.elements;
        
        for (let index = 0; index < elementsForm.length - 1; index++){
            console.log(elementsForm)
            /* console.log(elementsForm[index].value) */
            if(elementsForm[index].value == ""){
                elementsForm[index].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                $formErrors.style.color = 'red'
                $formErrors.innerHTML = 'Los campos indicados son obligatorios'
                error = true;
            } else {
                elementsForm[index].style.backgroundColor = "none"
            }
        }
        console.log(error)
        console.log(validationErrors)

        if(!error && !validationErrors) {
            /* $form.submit() */
            console.log("SUBMIIIIT")
        }

    })

})