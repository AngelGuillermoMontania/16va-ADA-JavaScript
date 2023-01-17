const $buttonModo = document.querySelector(".modo")
const $body = document.querySelector(".body")

$buttonModo.addEventListener("click", (e) => {
    $body.classList.toggle("dark")
    $body.id = "Hola"
})