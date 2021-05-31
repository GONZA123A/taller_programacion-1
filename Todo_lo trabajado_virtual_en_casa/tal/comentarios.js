const mostrarComentarios = async() => {

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments");

    const datos = await respuesta.json();
    /*
    //para almacenar un arreglo
    let arreglo_email = [];

    //el push sirve para guardar en el arreglo
    datos.forEach(objetos => {
        arreglo_email.push(objetos.email)

        /*console.log(`
        los cometarios son:
        -${objetos.body}`]
    });    
   console.log(arreglo_email);*/

   //uso de mapmap y filter para por ejemplo <10

    const array_correos = datos.map( (objetos) => objetos.email );
    console.log(array_correos);
}

const btn_comen=document.querySelector("#btn_comen");

btn_comen= addEventListener("click",mostrarComentarios);