export default class Ohm {
    tension;
    intencidad;
    resistencia;
    constructor()
    {

    }

    calcular_tension(i, r)
    {
        /*la tencion se calcula como: IxR
        this.intencidad = i;
        this.resistencia = r;  
        const resultado_tension = this.intencidad * this.resistencia;*/
        const resultado_tension = i * r;
        //entregar una respuesta
        return resultado_tension;
    }

    calcualar_corriente(v, r)
    {
        //la corriente se calcula como: V/R
        const resultado_corriente = v / r;
        
        return resultado_corriente;
    }
}