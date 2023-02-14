let datos = []

window.onload = function(){

    /* ACCESO A NODOS */
    const $form = document.querySelector("form")
    const $inputDate = document.querySelector("#inputDate")
    const $containDate = document.querySelector(".contain-date")

    /* COLOCANDO LA FECHA ACTUAL EN INPUT DATE */
    const fecha = new Date(); //Fecha actual
    let mes = fecha.getMonth() + 1; //obteniendo mes
    // Enero = 0
    // Febrero = 1
    // .......
    let dia = fecha.getDate(); //obteniendo dia
    const anio = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    const fechaActualParaInput = `${anio}-${mes}-${dia}`
    $inputDate.value = fechaActualParaInput



    /* FORMULARIO DE AGREGAR */
    $form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log($inputDate.value)
        datos.push({
            id: crypto.randomUUID(),
            date: $inputDate.value
        })
        paint()
        console.log(datos)
    })
    
    /* FUNCION PAINT */
    function paint () {
        $containDate.innerHTML = ""
        datos.forEach(elem => {
            $containDate.innerHTML += `<div><input type="date" value=${elem.date}><p>${elem.date.slice(8,10)}/${elem.date.slice(5,7)}/${elem.date.slice(0,4)}</p></div>`
        })
    }
}