const calcular = () => {

    let miarreglo = [44,88,11,2,7];

    console.log(miarreglo[1]);

}

const boton1 = document.querySelector("#btn_calcular1");
boton1.addEventListener("click", calcular);

const recorrer_arreglo = () => {
    //es un array de string
    let miarreglo2 = ['Programacion1','Web2','Robotica'];
    //con el indice accede a los datos y el for recorre todo
    for(indice in miarreglo2)
    {
        console.log(miarreglo2[indice]);
    }

}

const boton2 = document.querySelector("#btn_calcular2");
boton2.addEventListener("click", recorrer_arreglo);

const mostrar_Objeto = () => {
    let miobjeto = {
        nombre:'pepe',
        correo:{
            correo1:'pepe@gmail.com',
            correo2:'argento@gmail.com'
        },
        redes_sociales:{
            facebook:'www.facebook.com',
            twitter:'www.twitter.com'
        }
    } 
    console.log(`
        Mi nombre: ${miobjeto.nombre}
        Mi facebook: ${miobjeto.redes_sociales.facebook}
    `)    
}
const boton3 = document.querySelector("#btn_calcular3");
boton3.addEventListener("click", mostrar_Objeto);

const recorrer_objetos = () => {

    let Objetos = [
        {
            nombre:'pepe',
            apellido:'argento'
        },
        {
            nombre:'juan',
            apellido:'perez' 
        },
    ];
    //
    Objetos.forEach(objeto => {
        console.log(`
            Nombre: ${objeto.nombre}
            Apellido: ${objeto.apellido}
        `)
    });

}

const boton4 = document.querySelector("#btn_calcular4");
boton4.addEventListener("click", recorrer_objetos);
