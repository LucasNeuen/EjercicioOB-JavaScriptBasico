const nombre = "Lucas";
const apellido = "Garay";
const estudiante = nombre.concat(" ").concat(apellido);
    

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();


let cantidadLetras = estudiante.length;
    

let startName = estudiante.charAt(0);
let lastName = estudiante.charAt(10);


let deletEspacio = estudiante.replace(/ /g, "");


let nameInEstudiante = estudiante.includes(nombre)
   