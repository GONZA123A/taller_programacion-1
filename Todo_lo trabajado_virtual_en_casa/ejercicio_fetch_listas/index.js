// es necesario usar el async que asigna los dato a await para decir que es necesaruio una espera 
const mostrar_usuarios = async () =>{

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await respuesta.json();

    const total_items = [];

    data.forEach(element => {
        
        console.log(element.name)

        let item = `<li class="list-group-item">${element.name}</li>`

        total_items.push(item);
    });
    //llenamos el ul usando innerHTML. pero aplicamos un join para eliminar comillas al array total_items
    document.getElementById("ul_usuarios").innerHTML = total_items.join("");
}
//otra forma de llamar al boton
const boton = document.getElementById("btn_mostrar");

boton.addEventListener("click", mostrar_usuarios);