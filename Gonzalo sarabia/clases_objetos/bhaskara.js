export default class Bhaskara {

    dato1;
    dato2;
    dato3;

    constructor(a,b,c)
    {
        this.dato1 = a;
        this.dato2 = b;
        this.dato3 = c;

    }

    calcular_raices1()
    {
        //let respuesta = parseInt(this.dato1)* parseInt(this.dato2)* parseInt(this.dato3)
        const  bloque1  =  ( Math.pow( this.dato2 , 2 ) ) - ( 4 * this.dato3 )  ;
        const  bloque2  =  2 * this.dato1 ;
        const  raiz  =  Math.sqrt( bloque1 );
        const  bloque3  = -this.dato2- (raiz / bloque2) ;

        console.log('Respuesta multiplicacion: '+bloque3)
    }
    calcular_raices2()
    {
        //let respuesta = parseInt(this.dato1)* parseInt(this.dato2)* parseInt(this.dato3)
        const  bloque1  =  ( Math.pow( this.dato2 , 2 ) ) - ( 4 * this.dato3 )  ;
        const  bloque2  =  2 * this.dato1 ;
        const  raiz  =  Math.sqrt( bloque1 );
        const  bloque3  =  -this.dato2 + (raiz / bloque2) ;
        console.log('Respuesta multiplicacion: '+bloque3)
    }

}
