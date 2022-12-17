/* 
esPalindromo(palabra)
Crear una función esPalindromo que tenga como par´ámetro un string palabra y devuelva true si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha que de derecha a izquierda, o false sino.

esPalindromo('ada') // true
esPalindromo('reconocer') // true
esPalindromo('mama') // false
esPalindromo('javascript') // false
BONUS: hacer que funcione con oraciones y no con palabras. Ejemplos.

 */

//  va a retornar un boleano, si se lee igual de derecha a izquierda que de izquierda a derecha
// lo primero seria una nuevaVariable con la palabra dada vuelta

//   Javascript
//   tpircsavaJ

//   ada
//   ada

const esPalindromo = palabra => {

    let bool = false
    const reversePalabraArray = palabra.split("").reverse();
    //                         ["j","a","v","a","s","c","r","i","p","t"]
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === reversePalabraArray[i]) {
            bool = true;
        } else {
            bool = false
        }
    }

    return palindromo;
}

console.log(esPalindromo('ada'))
console.log(esPalindromo('reconocer'))
console.log(esPalindromo('javascript'))



//    "ada".split("")
//     ["a", "d", "a"]