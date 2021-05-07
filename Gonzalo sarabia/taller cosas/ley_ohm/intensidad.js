const calcular_intencidad= () => {
   
   const V = document.querySelector("#inp_v").value;
   const R = document.querySelector("#inp_r").value;

   const resultado =parseInt(V)/parseInt(R);

   alert(resultado);
}


const btn = document.querySelector("#btn_calcular");


btn.addEventListener("click",calcular_intencidad);

