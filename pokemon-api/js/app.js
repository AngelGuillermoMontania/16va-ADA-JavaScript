function $(elem) {
    return document.querySelector(elem)
}

const $containCards = $(".contain-cards")
const $filterAll = $("#filter-all")
const $filterGrass = $("#filter-grass")
const $filterFire = $("#filter-fire")
const $filterWater = $("#filter-water")
const $filterNormal = $("#filter-normal")

// Botones paginado
const $initPage = $("#init-page")
const $previousPage = $("#previous-page")
const $nextPage = $("#next-page")
const $lastPage = $("#last-page")

// Variables auxiliares
let offset = 0
let nameSearchCharacter = ""

window.addEventListener("load", () => {

    loadPokemons(`https://pokeapi.co/api/v2/pokemon`)

})


// Function fetch y llama a paint
async function loadPokemons(url) {
    try {
        console.log(`${url}${"?offset=" + offset}${nameSearchCharacter}`)
        const response = await fetch(`${url}${"?offset=" + offset}`)
        // https://pokeapi.co/api/v2/pokemon/offset=0
        const pokemonsUrl = await response.json()
        const arrayFetchURLS = pokemonsUrl.results.map(pokemonUrl => fetch(pokemonUrl.url))
        const promiseAllDetail = await Promise.all(arrayFetchURLS)
        const data = await Promise.all(promiseAllDetail.map(detailPokemon => detailPokemon.json()))
        paintCards(data)
    } catch (error) {
        // Mostra un modal bonito que algo estubo mal
        console.log(error)
    }
}

/* Pinta las cards */
function paintCards(arr) {
    $containCards.innerHTML = ""
    arr.forEach(pokemon => {
        $containCards.innerHTML += `<div class="card">
            <img src=${pokemon.sprites.other.home.front_default} class="img-pokemon">
            <div class="contain-info">
                <p>Name: ${pokemon.name}</p>
                <p>Base Experience: ${pokemon.base_experience}</p>
                <p>Hp: ${pokemon.stats[0].base_stat}</p>
                <p>Atack: ${pokemon.stats[1].base_stat}</p>
                <p>Defense: ${pokemon.stats[2].base_stat}</p>
                <p>Speed: ${pokemon.stats[5].base_stat}</p>
            </div>
        </div>`
    })
}


$nextPage.addEventListener("click", () => {
    /* if(page <= 42) {
        page = page + 1
    } */

    

    if(offset + 20 < 1281) {
        offset = offset + 20
        // page = page + 1
        console.log(offset)
        loadPokemons(`https://pokeapi.co/api/v2/pokemon`)
    }
})

$previousPage.addEventListener("click", () => {
    if(offset > 0) {
        offset = offset - 20
        // page = page - 1
        console.log(offset)
        loadPokemons(`https://pokeapi.co/api/v2/pokemon`)
    }
})

// AL HACER CLICK EN PAG SIGUIENTE offset = offset + 20



// Filtrado
const $inputSearch = $("#input-search")
const $btnSearch = $("#btn-search")

$btnSearch.addEventListener("click", () => {

    if($inputSearch.value === "") {
        nameSearchCharacter = ""
    } else {
        nameSearchCharacter = `&name=${$inputSearch.value}`
    }
    loadPokemons("https://pokeapi.co/api/v2/pokemon")
})