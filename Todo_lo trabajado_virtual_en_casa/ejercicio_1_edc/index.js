
const mostrar = () => {

    const respuesta = window.prompt("Usted es Culpable?");

    if(respuesta == 'si')
    {
        document.write('irás a la cárcel.')

    }
    else{
        if(respuesta == 'no')
        {
            document.write('irás a casa.')
        }
        else{
            document.write('la documentación por favor.')
        }
    }

}

 const btn = document.querySelector("#btn_mostrar");

 btn.addEventListener("click", mostrar);