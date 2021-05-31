
const mensaje_clima = () => {   

    //identificamos a select atraves de su ID, para extraer su valor
    const valor_clima = document.querySelector("#slt_clima").value;

    //identificamos al parrafo atraves de su ID
    const parrafo = document.querySelector("#p_Discripicion_clima")

    if(valor_clima == 0)
    {
        let mensaje = 'Cielo despejado, si probabilidad de nubosidad';
        parrafo.textContent = mensaje;
    }
    else{
        if(valor_clima == 1)
        {
            let mensaje = 'fuertes lluvias, con posisblidad de mejora durante la noche';
            parrafo.textContent= mensaje;
        }
        else{
            let mensaje = 'Cielo parcialmente nublado, con posibilidad de lluvias';
            parrafo.textContent= mensaje;   
        }
    }
}

const select = document.querySelector("#slt_clima");
select.addEventListener("change", mensaje_clima);