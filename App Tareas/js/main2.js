const tareas = [

]

/* Modal */
const $openButton = document.querySelector("#open-modal")
const $containModal = document.querySelector(".contain-modal")
const $closeButton = document.querySelector("#close-modal")

const $title = document.querySelector("#title")
const $state = document.querySelector("#state")
const $form = document.querySelector("#formCreate")

/* Eventos Modal */
$openButton.addEventListener("click", function (event) {
    $containModal.classList.add("show-modal")
})
// Cuando le haga click a el boton de open necesito que agregue la clase show-modal a contain-modal

$closeButton.addEventListener("click", (event) => {
    $containModal.classList.remove("show-modal")
})


$form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Antes de agregar", tareas)
    tareas.push({titulo: event.target[0].value, estado: event.target[1].value})
    console.log("Despues de agregar", tareas)
    //  Aca quiero agregar la nueva tarea, pero primero necesito los valores de los inputs
})

let arr = [5, 90, 10, 150]

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "l") {
        console.log("LLegaste a la l esta en el indice", i)
    }
}

for (let i = 0; i < array.length; i++) {
    
}