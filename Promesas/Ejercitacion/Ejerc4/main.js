/* const sectionCharacters = document.querySelector(".contain-characters")
let characters

fetch(`https://hp-api.onrender.com/api/characters`)
    .then(response => response.json())
    .then(info => {
        characters = info
        console.log(characters)
        for (let i = 0; i < 20; i++) {
            sectionCharacters.innerHTML += `<div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src=${characters[i].image} alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">${characters[i].name}</p>
                        <p class="subtitle is-6">${characters[i].actor}</p>
                    </div>
                </div>
    
                <div class="content">
                    House: ${characters[i].house}
                </div>
            </div>
        </div>`
        }
    })
    .catch(error => console.log(error)) */


/* const arrayPromesas = [fetch(`https://hp-api.onrender.com/api/characters`), fetch(`https://api.openweathermap.org/data/2.5/weather?q=san%20juan&appid=4f3c88ba651a35b3eda9f05221decec6&units=metric`)]
Promise.all(arrayPromesas)
    .then(responseArray => {
        return responseArray.map(response => response.json())
    })
    .then(info => {
        Promise.all(info)
            .then(data => {
                fetch(data)
                    .then(info => {
                        fetch(info)
                            .then(info => {
                                Promise.all(info)
                                    .then()
                                    .catch(error => console.log(error))
                            })
                            .catch(error => console.log(error))
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
    )
    .catch(error => console.log(error)) */

/* let urlDetailsPokemon
fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(info => {
        Promise.all(info.results.map(pokemon => fetch(pokemon.url)))
            .then(responseDetail => responseDetail.map(elem => elem.json()))
            .then(infoArray => {
                Promise.all(infoArray)
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    })
    .catch(error => console.log(error)) */






