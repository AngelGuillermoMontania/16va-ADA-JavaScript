function $ (elem) {
    return document.querySelector(elem)
}

let tareas = [
    {
        id: 1,
        Titulo: "Estudiar Python",
        Estado: "Pendiente"
    },
    {
        id: 5,
        Titulo: "Aprender Angular",
        Estado: "En progreso"
    },
    {
        id: 6,
        Titulo: "Aprender Angular",
        Estado: "En progreso"
    }
]



window.addEventListener("load", () => {

    const $section = $(".contain-tareas")
    
    const paint = (nodo, array) => {
        nodo.innerHTML = ""
        array.forEach(element => {
            nodo.innerHTML += `<div>
                <p>${element.Titulo}</p>
                <p>${element.Estado}</p>
                <button class="btn-delete" id=${element.id}>Eliminar</button>
            </div>`
        });
        $btnDeleteTarea = document.querySelectorAll(".btn-delete")
        $btnDeleteTarea.forEach(button => {
            button.addEventListener("click", (e) => {
                tareas = tareas.filter(tarea => tarea.id !== Number(e.target.id))
                paint($section, tareas)
            })
        })
    }
    
    paint($section, tareas)
})



















const saludos = ["Hola", "Chau"]
const nombres = ["Angel", "Mel", "Ada"]

for (let i = 0; i < saludos.length; i++) {
    console.log(saludos[i])
    for (let j = 0; j < nombres.length; j++) {
        console.log(nombres[j])
    }
}