const mostrar_numeros = () =>{

    let numeros =[1,2,3,4,5,6];

    numeros.push(7);
    numeros.push(8);

    let suma = 0;
    let cantidad_elemento= numeros.length;

    for(indice in numeros){

        document.write(numeros[indice])

    }

    numeros.forEach(Element=> {

        document.write(Element);

        suma= suma + Element;
    });

    let promedio = suma / cantidad_elemento;

    document.write(`
        El promedio de todos estos numero es:${promedio}
    `);


}

const btn2 = document.querySelector("#btn_mostrar");
btn2.addEventListener("click", mostrar_numeros);