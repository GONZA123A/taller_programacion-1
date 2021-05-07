
const obtenerUsuario= async() => {
    
    const usuario = await fetch('https://jsonplaceholder.typicode.com/users');
   
    const data2 = await usuario.json();

    data2.forEach(propiedades => {
        console.log(`
            Datos del usuario:
            -Nombre:${propiedades.name}
            -Gmail:${propiedades.email}
            -Ciudad${propiedades.address.city}
        `);
    });
}
const btn_user = document.querySelector("#btn_user");
btn_user.addEventListener("click",obtenerUsuario);


