import Matematica from './matematica.js';

const operar = () =>{
    // Otra forma con constructor ->
    let d1= document.getElementById("inp_d1").value;
    let d2 = document.getElementById("inp_d2").value;

    const mat = new Matematica(d1,d2);
    // Otra forma ->
    //mat.dato1 = document.getElementById("inp_d1").value;
    //mat.dato2 = document.getElementById("inp_d2").value;<-
    mat.sumar();
    

}
document.getElementById("btn_operar").addEventListener("click", operar);

//Aca se inicia el otro Ejercicio
import Bhaskara from './bhaskara.js';
const calcular = () => {

    let a = document.getElementById("inp_a").value;
    let b = document.getElementById("inp_b").value;
    let c = document.getElementById("inp_c").value;

    const bas = new Bhaskara(a,b,c);
    bas.calcular_raices1();
    bas.calcular_raices2()
    

}
document.getElementById("btn_calcular").addEventListener("click", calcular)