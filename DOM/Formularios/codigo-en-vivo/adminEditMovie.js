function hola(element) {
    return document.querySelector(element)
};

/* window.addEventListener('load', function () {

    // Formulary of edition
    let $formCharge = $('#form');

    // Name
    let $title = $('#title');
    let $titleErrors = $('#titleErrors');

    // Comment
    let $progress = $('#progress');
    let $progressErrors = $('#progressErrors');

    // Duration
    let $state = $('#state');
    let $stateErrors = $('#stateErrors');

    // Regular expressions
    let regExAlpha = /^[a-zA-Z0-9-\sñáéíóúüª!:?'¡].{5,50}$/;
    let regExAlphaText = /^[a-zA-Z0-9-\sñáéíóúü:=%&$·"!¿/[ª!?'¡].{20,500}$/;

    let validationErrors = false;

    $title.addEventListener('blur', function(){
        if(!$title.value.trim()){
            $titleErrors.innerHTML = 'El título es obligatorio'
            $title.style.color = '#ff0000'
            validationErrors = true
        } else if (!regExAlpha.test($title.value)){
            $titleErrors.innerHTML = 'El título no es válido'
            $title.style.color = '#ff0000'
            validationErrors = true
        } else {
            $titleErrors.innerHTML = 'El título es valido'
            $title.style.color = '#2940D3'
            $title.style.backgroundColor = '#d8c371'
            $title.style.border = 'none'
            validationErrors = false
        }
    })

    $description.addEventListener('blur', function(){
        if(!$description.value.trim()){
            $descriptionErrors.innerHTML = 'La descripcion es obligatorio'
            $description.style.color = '#ff0000'
            $description.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlphaText.test($description.value)){
            $descriptionErrors.innerHTML = 'La descripcion no es válida'
            $description.style.color = '#ff0000'
            $description.toggleAttribute('required')
            $description.onKeyPress('')
            validationErrors = true
        } else {
            $descriptionErrors.innerHTML = 'La descripcion es valida'
            $description.style.color = '#2940D3'
            $description.style.backgroundColor = '#d8c371'
            $description.style.border = 'none'
            $description.toggleAttribute('required')
            validationErrors = false
        }
    })

    $duration.addEventListener('blur', function(){
        if(!$duration.value.trim()){
            $durationErrors.innerHTML = 'La duracion es obligatoria'
            $duration.style.color = '#ff0000'
            $duration.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($duration.value)){
            $durationErrors.innerHTML = 'La duracion no es válida'
            $duration.style.color = '#ff0000'
            $duration.toggleAttribute('required')
            validationErrors = true
        } else {
            $durationErrors.innerHTML = 'La duracion es valida'
            $duration.style.color = '#2940D3'
            $duration.style.backgroundColor = '#d8c371'
            $duration.style.border = 'none'
            $duration.toggleAttribute('required')
            validationErrors = false
        }
    })

    $formCharge.addEventListener('submit', function(event){
        let error = false;
        event.preventDefault();
        
        // let error = false;
        let elementsForm = this.elements;
        
        for (let index = 0; index < elementsForm.length; index++){
            console.log(elementsForm)
            if(elementsForm[index].value == ""){
                elementsForm[index].classList.add('submitErrors')
                elementsForm[index].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                submitErrors.style.color = 'red'
                submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true;
            }
        }
        console.log(error)
        console.log(validationErrors)

        if(!error && !validationErrors) {
            $formCharge.submit()
        }

    })

}) */