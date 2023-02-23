const sectionCharacters = document.querySelector(".contain-characters")

fetch(`https://hp-api.onrender.com/api/characters`)
    .then(response => response.json())
    .then(info => {
        info.forEach(character => {
            sectionCharacters.innerHTML += `<div><p>${character.name}</p><p>${character.house}</p></div>`
        });
    })
    .catch(error => console.log(error))