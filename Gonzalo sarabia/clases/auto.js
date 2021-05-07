class Auto {
    //declaro los atributo de la clase
    precio = ' $1.000.000';
    motor;

    //constructor lo llena por el new Auto
    constructor(mar,mod)
    {
        this.marca = mar;
        this.modelo = mod;
    }
    //manera de poner una funcion
    arranque(){
        console.log(`
        marca:${this.marca}
        modelo:${this.modelo}
        precio:${this.precio}
        motor:${this.motor}
        `);
    }
}
//creo un ainstancia de la clase pero tambien se ejecuta el constructor
const auto= new Auto(' fiat',' Argo');

auto.motor = ' 1.4  TSI';
//aca con las instancia ejecuto el metodo arranque
auto.arranque();

/*exportando esta clase, esta visible para
los demas archivos
module.exports = Auto;*/
