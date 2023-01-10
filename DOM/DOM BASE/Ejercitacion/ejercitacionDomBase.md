# 🚀           DOM         🚀

Previamente a cada ejercicio, corroborar el correcto linkeo de html con js, mediante un `console.log("Me conecte")`

## DOM Basico
### *Ejercicio 1*
Mediante un `prompt`, pedir el nombre completo, y mostrar el nombre ingresado en el html con js usando `querySelector`, usar una etiqueta de texto a eleccion.

### *Ejercicio 2*
Agregar una etiqueta `h1` que diga: `Hola, este color lo agregue con js`, y colocarle el color `red` con js

### *Ejercicio 3*
Guardar el siguiente array `["Argentina", "Chile", "Mexico", "Peru"]` en una variable, mostrar en el html una etiqueta `p` por cada pais.

### *Ejercicio 4*
En el html crear a mano las cuatro etiquetas `p` con los 4 paises del ejercicio anterior. Acceder a ellas mediante `querySelectorAll`, y aumentar el tamaño del texto solo al pais 2 y 4.

### *Ejercicio 5*
Dado el siguiente objeto:
```
const datos = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: "29",
};
```
mostrar en el html un saludo, utilizando el objeto:
Ejemplo: `Hola, soy ${datos.nombre}, mi email es ${datos.email}, mi edad es 29 años y mi identificador unico es 1`

### *Ejercicio 6*
Dado el siguiente array de objetos:
```[
  {
    edad: 17,
    familiar: "Salamandra",
    casa: "Hufflepuff",
    nombreCompleto: {
      nombre: "Ellis",
      apellido: "Reeves",
    },
    hechizoPreferido: "Expecto Patronum",
    materias: [
      {
        nombre: "Astronomía",
        promedio: 1,
      },
      {
        nombre: "Encantamientos",
        promedio: 6,
      },
      {
        nombre: "Defensa Contra las Artes Oscuras",
        promedio: 2,
      },
      {
        nombre: "Vuelo",
        promedio: 0,
      },
      {
        nombre: "Herbología",
        promedio: 2,
      },
      {
        nombre: "Historia de la Magia",
        promedio: 2,
      },
      {
        nombre: "Pociones",
        promedio: 8,
      },
      {
        nombre: "Transformaciones",
        promedio: 1,
      },
    ],
  },
  {
    edad: 15,
    familiar: "Salamandra",
    casa: "Gryffindor",
    nombreCompleto: {
      nombre: "Neal",
      apellido: "Spence",
    },
    hechizoPreferido: "Lumos",
    materias: [
      {
        nombre: "Astronomía",
        promedio: 0,
      },
      {
        nombre: "Encantamientos",
        promedio: 8,
      },
      {
        nombre: "Defensa Contra las Artes Oscuras",
        promedio: 6,
      },
      {
        nombre: "Vuelo",
        promedio: 7,
      },
      {
        nombre: "Herbología",
        promedio: 1,
      },
      {
        nombre: "Historia de la Magia",
        promedio: 3,
      },
      {
        nombre: "Pociones",
        promedio: 10,
      },
      {
        nombre: "Transformaciones",
        promedio: 5,
      },
    ],
  }
] 
```
mostrar en el html el nombre completo, edad y hechizo preferido de los dos estudiantes.
Ej:
```
Nombre: xxxx xxxxx,
Edad: xx,
Hechizo preferido: xxxxxxxxx xxxx

Nombre: xxxxxx xx,
Edad: xx,
Hechizo preferido: xxxxx
```

### *Ejercicio 7*
Agregar al ejercicio anterior, por cada estudiante solo las materias con promedio mayor a 6, con sus respectivos nombres:
Ej: `
Nombre: xxxx xxxxx,
Edad: xx,
Hechizo preferido: xxxxxxxxx xxxx,
Materias aprobadas: xxxxx promedio: x, xxxxxx promedio:x, xxxxx xxx promedio: x
`