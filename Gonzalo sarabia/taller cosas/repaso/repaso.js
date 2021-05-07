//construir una funcion que imprime una alerta en navegador
//forma larga
/*const mifuncion = () => {
    alert('probando mi funcion');

}
*/
//forma corta
//const mifuncion= () => alert('probando mi funcion'); 


const mifuncion= () => {
    //"d1" guarda el valor ingresado, y el".value" lo extrae
   const d1 = document.querySelector("#inp_d1").value;
   const d2 = document.querySelector("#inp_d2").value;

   const resultado =parseInt(d1)+parseInt(d2);

   alert(`messi:
    
    
        ${resultado}` );
}

//identificar el boton a traves su ID
const btn = document.querySelector("#btn_probar");

//cuando se haga click en el boton se ejecuta la funcion
btn.addEventListener("click",mifuncion);