
//uso de async y await
const obtener_pokemones= async () => {
    //siempre se pone async y await a la hora de espera, e sdecir cuando hay que esperar
    const respuesta= await fetch('https://pokeapi.co/api/v2/pokemon');
    //indicamos que la respuesta recibida es de formato json
    const data= await respuesta.json();
    /*unicamente en este ejemplo estoy mostrando los datos que tiene la propiedad 'result'
    console.log(data.results);
    */
   //generamos un simple array de los nombres de los pokemos
    const nombre_pokemones = data.results.map ((pokemon) => pokemon.name);

    console.log(nombre_pokemones);
}
obtener_pokemones();