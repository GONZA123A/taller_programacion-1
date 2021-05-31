
const costo = () => {
    
    const topping = window.prompt("Ingrese topping(ingrediente) que quiere agregarle al helado?");

    if(topping == 'oreo')
    {
        let precio= 250 + 40;
        document.write('El helado cuesta:',precio);
    }
    else{
        if(topping == 'KitKat')
        {
            let precio= 250 + 55;
            document.write('El helado cuesta:',precio);
        }
        else{
            if(topping == 'brownie')
            {
                let precio= 250 + 65;
                document.write('El helado cuesta:',precio);
            }
            else{
                if(topping == 'rocklets')
                {
                    let precio= 250 + 75;
                    document.write('El helado cuesta:',precio);
                }
                else{
                    if(topping == '')
                    {
                        document.write('El helado cuesta: 250');
                    }
                    else{
                        document.write('no tenemos este topping, lo sentimos.');
                    }
                }
            }
        }
    }


}


const btn = document.querySelector("#btn_mostrar");

btn.addEventListener("click", costo)