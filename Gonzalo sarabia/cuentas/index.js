import Cuentas from './cuenta.js';

const almacenar = () =>{

    let d1= document.getElementById("inp_usuario").value;
    let d2 = document.getElementById("inp_password").value;

    const instancia = new Cuentas(d1,d2);

    
    

}
document.getElementById("btn_guardar").addEventListener("click", almacenar);