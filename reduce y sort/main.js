/* 
// 100


let operaciones = [{
    id: "87897979adsadsafd",
    num: 5,
    type: "Ganancia"
}, {
    id: "541656465dsafsdafdsa",
    num: 15,
    type: "Ganancia"
}, {
    id: "654564964",
    num: 35,
    type: "Gastos"
}, {
    id: "544841212163",
    num: 1,
    type: "Gastos",
    category: "Salidas"
},{
    id: "654684684511",
    num: 40,
    type: "Gastos",
    category: "Trabajo"
},{
    id: "65484715",
    type: "Gastos",
    num: 4,
    description: "",
    category: "Comida",
    date: "2023-02-10"
}]

let categorias = ["Comida", "Trabajo"]

const arrayGanancias = operaciones.filter(operacion => operacion.type === "Ganancia") // FILTRO POR GANANCIAS
const reduceGanancias = arrayGanancias.reduce((accumulator, currentValue) => accumulator + currentValue.num, 0); // SUMO TODAS LAS GANANCIAS
console.log("Ganancias: ",reduceGanancias)
// 60

const arrayGastos = operaciones.filter(operacion => operacion.type === "Gastos")
const reduceGastos = arrayGastos.reduce((acc, cv) => acc + cv.num, 0)
console.log("Gastos: ",reduceGastos)

console.log("TOTAL: ",reduceGanancias - reduceGastos) */


const arrayString = ["Compra", "Zapallo", "angel", "Baston", "bronca", "Juan"]
//    a b C J Z    a = 97      C = 67
//   
/* const arrayNums = [ 98, 21, 67, 15, 4 ]


const arraySortNums = arrayNums.sort((a, b) => {
    // if(a < b) {
    //     return 1
    // }
    // if(a === b) {
    //     return 0
    // }
    // if(a > b) {
    //     return -1
    // }


    //return b - a
})
console.log(arraySortNums)    //  []
 */
const arraySortString = arrayString.sort((a, b) => {
    if(a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    if(a.toLowerCase() === b.toLowerCase()) {
        return 0
    }
    if(a.toLowerCase() > b.toLowerCase()) {
        return 1
    }
})

console.log(arraySortString)


filter(() => {
    () => {{
        
    }}
})