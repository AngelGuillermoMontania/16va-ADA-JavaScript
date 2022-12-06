# Arrays 1

### `arrayCorto(array, valor)`

Crear una función `arrayCorto` que tome como argumento un array `array`, si el array tiene menos de 5 valores, agregar el valor `valor` en el final del array y devuelve el nuevo array, si tiene 5 o mas valores, devuelve -1. Ejemplo:

```javascript
arrayCorto([5, 7, 99], 76) // [5, 7, 99, 76]
arrayCorto(["A", "Y", "C", "Q", "F"], "I") // -1
arrayCorto([5, 7, 99, 22, 38], 76) // -1
```

### `sumar(numeros)`

Crear una función `sumar` que tome como argumento un array de números `numeros` y devuelva la suma de el primer valor con el ultimo valor. Ejemplo:

```javascript
sumar([5, 7, 10, 12, 24]) // 29
sumar([51, 7, 10, 12, 99]) // 100
sumar([76, 7, 10, 12, 21]) // 97
```

### `contiene(numero, numeros)`

Crear una funci´ón `contiene` que tome como argumentos un número `numero` y un array de números `numeros` y devuelva `true` o `false` dependiendo de si dicho `numero` se encuentra en el array de `numeros`. Ejemplo:

```javascript
contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
```

### `cambiarLugar(array)`

Crear una función `cambiarLugar` que tome como argumento un array `array`, quitar el valor del ultimo lugar y agregarlo al inicio, devolver el array modificado. Ejemplo:

```javascript
cambiarLugar([5, 7, 99]) // [99, 5, 7]
cambiarLugar(["A", "Y", "C", "Q", "F"]) // ["F", "A", "Y", "C", "Q"]
cambiarLugar([5, 7, 99, 22, 38]) // [38, 5, 7, 99, 22]
```


### `arrayDeArrays(array, indice)`

Crea una funcion `arrayDeArrays` que recibira un array `array` y el indice `indice`, devuelve el primer elemento del array accedido previamente con el indice del parametro. Si el array no existe, devuelve -1 Ejemplo:

```javascript
arrayDeArrays([[5, 7, 99], [67, 89, 21], [40, 27, 57]], 1) // 67
arrayDeArrays([["A", "Y", "C"], ["J", "F", "A"], ["K", "T", "B"]], 2) // K
arrayDeArrays([["A", "Y", "C"], ["J", "F", "A"], ["K", "T", "B"]], 3 // -1
```