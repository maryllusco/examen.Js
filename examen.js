//desde ya, hice lo que pude :) //

//Parte teorica:

// 1- La variable var por lo general no se suele utilizar a menos que uno lo utilice
//en un entorno antiguo. La variable let, se puede volver a reasignar los valores.
//La variable const, en esta variable no se puede volver a reasignar lo valores.

// 3- Lo que devuelve el metodo .()filter, es que crea un nuevo array, con una ciertas
//condiciones. No modifica el array original, devulve el array nuevo solo con
//una condicion porque lo filtra. .()map Devuelve un array nuevo con los resultados
//de aplicar una función a cada elemento.

// 2- Para utilizar el arreglos, podemos acceder a los elementos por índice.
//Para el objeto, almacena datos con claves únicas. ejemplo
//un usuario con nombre, edad, email.
//Conviene usar arreglos para listas ordenadas.
//Conviene usar objetos para representar cosas con atributos.

// 4- El metodo que se utiliza es Unshift().

//Parte practica:
//1-
const alumnos = [
  { nombre: "Ana", edad: 20, nota: 8 },
  { nombre: "Luis", edad: 17, nota: 5 },
  { nombre: "Carla", edad: 22, nota: 9 },
];

alumnos.forEach(function (alumno) {
  if (alumno.nota >= 6) {
    console.log(alumno.nombre, " está aprobado");
  } else {
    console.log(alumno.nombre, " está desaprobado");
  }
});

function obtenerPromedio() {
  let sumaNotas = 0;
  alumnos.forEach((alumno) => {
    sumaNotas += alumno.nota;
  });
  return sumaNotas / alumnos.length;
}

const promedio = obtenerPromedio();
console.log("El promedio de nota es", promedio);

//2-
const mayorEdad = alumnos.filter(function (alumno) {
  return alumno.edad >= 18;
});

const nombresMayusculas = alumnos.map(function (alumno) {
  return alumno.nombre.toUpperCase();
});
