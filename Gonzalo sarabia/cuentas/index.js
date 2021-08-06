import Cuentas from './cuenta.js';

const almacenar = () =>{

    let d1 = document.getElementById("inp_usuario").value;
    let d2 = document.getElementById("inp_password").value;

    const instancia = new Cuentas(d1,d2);

    instancia.guardarCuenta();

    listar();
}
const listar = () => {
    const instancia = new Cuentas();
    const listan = instancia.listarCuentas();

    let lista_general = [];

    listan.forEach(element => {
        
        let li = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">${element.usuario}</div>
        </div>
            <span class="badge bg-primary rounded-pill">${element.password}</span>
         </li>
        `
        lista_general.push(li);
    });

    document.getElementById("lista_cuentas").innerHTML = lista_general.join("");
}


listar();

document.getElementById("btn_guardar").addEventListener("click", almacenar);