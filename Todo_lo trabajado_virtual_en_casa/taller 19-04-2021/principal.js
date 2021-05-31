import Ohm from './ohm.js';

const calcular_v_i = () => {

    const ohm_instancia = new Ohm();

    const tension = ohm_instancia.calcular_tension(4,20);

    const corriente = ohm_instancia.calcualar_corriente(220,20);
    //manera para que salga en la hoja y no como un alert
    document.write(`
        Tension: ${tension} volt
        Corriente:${corriente} amp
    `);
}

const btn_calcular = document.querySelector("#btn_calcular");
btn_calcular.addEventListener("click", calcular_v_i);
    