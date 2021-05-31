
const mostrar_puestos = () =>{

    let clasificaciones =[' Ana', ' Oswaldo',' Raúl ',' Celia',' María',' Antonio  '];

    clasificaciones.forEach(Element=> {
        document.write(Element);
    });

    for(indice in clasificaciones){
        document.write(clasificaciones[indice])
    }

    document.write(`
        1°Puesto: ${clasificaciones[0]}
        2°Puesto: ${clasificaciones[1]}
        3°Puesto: ${clasificaciones[2]}
    `);

}

const btn = document.querySelector("#btn_mostrar");
btn.addEventListener("click", mostrar_puestos);