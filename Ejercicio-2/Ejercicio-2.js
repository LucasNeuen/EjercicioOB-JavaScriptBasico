/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/


const lista = [
    "Lucas Garay",
    28,
    false,
    new Date (1995,07,25),

    {
        Titulo: "El ultimo baile",
        Autor: "Michael Jordan",
        Fecha: new Date(2020,12,21),
        URL: "https://www.google.com.ar",
    }
];

console.log(lista);