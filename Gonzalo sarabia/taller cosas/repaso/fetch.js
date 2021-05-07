//async y await
const obternerPokemones= async () => {

    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');

    const data = await respuesta.json();

    data.results.forEach(objeto =>  {
        console.log(objeto.name);
    });
}
const btn_poke = document.querySelector("#btn_poke");
btn_poke.addEventListener("click",obternerPokemones);

//pequeño repaso de objeto
const miObjeto = {
    taller:'programacion 1',
    curso:'5to año',
    contenidos:{
        tema1:'variables',
        tema2:'funciones',
        tema3:'objetos'
    }
}   
console.log(`
    los contenidos de taller son:
    -${miObjeto.contenidos.tema1}    
    -${miObjeto.contenidos.tema2}
`)