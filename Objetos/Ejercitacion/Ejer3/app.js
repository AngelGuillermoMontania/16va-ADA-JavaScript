const song = {
    title: "Inmigrant Song",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
};

const cancion = {
    titulo: song.title,
    banda: song.bandName,
    duracion: song.duration / 1000,
    likes: 155,
}
/* console.log(cancion) */


// Destructuring
const { likes, titulo, banda, duracion } = cancion;
// const titulo = cancion.titulo
// const banda = cancion.banda
// const duracion = cancion.duracion
// const likes = cancion.likes

const nombres = ["Mel", "Angel", "Ada"]

const [ nombre1, , nombre3 ] = nombres

// console.log(nombre3)





// Spread Operator
/* const cancion = {
    titulo: song.title,
    banda: song.bandName,
    duracion: song.duration / 1000,
    likes: 155,
} */
const led = {
    name: "Led Zeppelin",
    integrantes: "dbsajhbdas djksahkdas"
}
const cancion2 = {...cancion, ...led }
//               {  titulo: song.title,banda: song.bandName,duracion: song.duration / 1000,likes: 155,     }



console.log(cancion2)