class Taller {
    
    libreria_css;
    servicio_google;

    constructor(taller,lenguaje)
    {
        this.nombre_taller =taller;
        this.lenguaje_programacion = lenguaje;
    }

    mostrar_datos(){
        console.log(`
        nombre_taller:${this.nombre_taller}
        lenguaje_programacion:${this.lenguaje_programacion}
        libreria_css:${this.libreria_css}
        servicio_google:${this.servicio_google}
        `);
    }
}
const taller= new Taller(' Programacion 1',' JavaScript');

taller.libreria_css = ' Bootstrap ';
taller.servicio_google = ' Firebase';

taller.mostrar_datos();