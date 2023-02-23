fetch(`https://hp-api.onrender.com/api/characters`)
    .then(response => response.json())
    .then(info => console.log(info))
    .catch(error => console.log(error))