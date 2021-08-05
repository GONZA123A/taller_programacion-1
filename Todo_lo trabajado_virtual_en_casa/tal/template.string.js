const mensaje = (numero) => {
    //let texto = 'el reultado de la suma es:' +numero;

    //mas facil y se nota el espacio
    let texto = `
    probando los backtick de javascript

    el resultao de la suma es: ${numero}`

    return texto;
}



//aca se ejecuta lafuncion inmediatamente nos entrega una respuesta
const respuesta = mensaje(25);
console.log(respuesta)
