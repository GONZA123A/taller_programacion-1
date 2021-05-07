import Protocolo from './Protocolo.js';

const Imprimir= () => {
   
    const Nom = document.querySelector("#inp_n").value;
    const Ape = document.querySelector("#inp_a").value;
    const Tem = document.querySelector("#inp_t").value;
 
    const proto = new Protocolo();

    proto.Mostrar(Nom, Ape, Tem);
 }

const btn = document.querySelector("#btn_mostrar");
btn.addEventListener("click",Imprimir);