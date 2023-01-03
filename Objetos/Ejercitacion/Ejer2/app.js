const user = {
    fullname: "Angel Guillermo",
    email: "angelguillermomontania@gmail.com",
    age: 30,
    presentar: () => {
        return `Hola, mi nombre es ${user.fullname} y tengo ${user.age} años`
    }
}

console.log(user)
console.log(user.presentar())