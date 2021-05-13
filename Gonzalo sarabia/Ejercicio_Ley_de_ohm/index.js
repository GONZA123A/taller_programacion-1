
const calcular = () => {

    const select = document.querySelector("#slt_operacion").value;
    const dato1 = document.querySelector("#inp_d1").value;
    const dato2 = document.querySelector("#inp_d2").value;
    const parrafo = document.querySelector("#par_solucion")
    if(select==0){
        const intencidad = dato1/dato2;
        parrafo.textContent= `
            El resultado de Intencidad es: ${intencidad}
        `
    }
    else{
        if(select==1){
            const Tension = dato1 * dato2;
            parrafo.textContent= `
            El resultado de Tension es: ${Tension}
        `
        }
        else{
            const Resistencia = dato1 / dato2;
            parrafo.textContent= `
            El resultado de Resistencia es: ${Resistencia}
        `
        }
    }
}
const btn_calcular = document.querySelector("#btn_calcular");
btn_calcular.addEventListener("click", calcular);
const cambiar_label = () =>{

    const select = document.querySelector("#slt_operacion").value;
    const label1 = document.querySelector("#lbl_d1");
    const label2 = document.querySelector("#lbl_d2");
    if (select == 0){
        label1.textContent = 'V(tencion)'
        label2.textContent = 'R(resistencia)'
    }
    else{
        if(select == 1){
            label1.textContent = 'I(intencidad)'
            label2.textContent = 'R(resistencia)'
        }
        else{
            label1.textContent = 'V(tencion)'
            label2.textContent = 'R(resistencia)'
        }
    }
}
const select = document.querySelector("#slt_operacion");
select.addEventListener("change", cambiar_label);