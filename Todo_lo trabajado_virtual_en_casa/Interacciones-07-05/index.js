//variable

let valor = 4;

//bucles

//aca recorro solo 1
const miarreglo = [1,4,'messi'];

//console.log(miarreglo[2]);

//aca recoremo todo el array
for (indice in miarreglo)
{
    console.log(miarreglo[indice]);
}

/*
    Array de objeto
*/
let miobjeto = {
    nombre:'gonzalo',
    apellido:'sarabia',
    DNI:45561022
}

console.log(miobjeto.nombre);

let miarreglo_objetos = [
    {
        taller:'Programacion'
    },
    {
        taller:'Web 2'
    }
];

for(objeto of miarreglo_objetos)
{
    console.log(objeto.taller);
}

miarreglo_objetos.forEach(objetos => {
    console.log(`
        Taller:${objeto.taller}
    `)
})