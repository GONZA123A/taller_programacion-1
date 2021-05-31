const mascota = {
    nombre:'tom',
    edad:2,
    color:'blanco',
    caracterisicas:['peludo', 'delgado']
};

//forma tradicional de acceder al objeo y mostrarlo
const nombre = mascota.nombre;
const caracterisica = mascota.caracterisicas[0];

console.log(mascota.nombre);
console.log(mascota.caracterisicas[0]);

//forma moderna de destructuring object
//esto es mas facil y sencillo
const { color, edad, nombre } = mascota;

console.log(nombre);
console.log(color);
console.log(edad);
