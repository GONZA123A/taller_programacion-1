const calcular = () => {

    const A = document.querySelector("#inp_d1").value;
    const B = document.querySelector("#inp_d2").value;
    const C = document.querySelector("#inp_d3").value;
    const parrafo1 = document.querySelector("#par_solucion1")
    const parrafo2 = document.querySelector("#par_solucion2")

    const bloque1 = (Math.pow(B,2))-(4*C) ;
    const bloque2 = 2*A;
    const Raiz = Math.sqrt(bloque1);
    const bloque3 = Raiz/bloque2;
    

    const resultado1 = -B + bloque3;
    parrafo1.textContent= `
            El resultado de X1 es: ${resultado1}`
    const resultado2 = -B - bloque3;
    parrafo2.textContent= `
            El resultado de X2 es: ${resultado2}`
    
}
const btn_calcular = document.querySelector("#btn_calcular");
btn_calcular.addEventListener("click", calcular)