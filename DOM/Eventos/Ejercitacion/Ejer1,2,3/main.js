const qs = (elementoDelDom) => {
    return document.querySelector(elementoDelDom)
}

const $count = qs(".count")
const $suma = qs(".suma")
const $resta = qs(".resta")
const $reset = qs(".reset")

let count = 0

$suma.addEventListener("click", (e) => {
    count++
    $count.innerText = count
})

$resta.addEventListener("click", (e) => {
    count--
    $count.innerText = count
})

$reset.addEventListener("click", (e) => {
    count = 0
    $count.innerText = count
})