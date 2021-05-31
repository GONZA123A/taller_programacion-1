  
const Edad = () => {

    const Edad_paciente = document.querySelector("#inp_edad").value;

    if(Edad_paciente >= 1 && Edad_paciente < 13){
        alert('Es menor a 13 Años');
    }
    else{
        if(Edad_paciente >=13 && Edad_paciente < 21){
            alert('Si, esta entre los 13 y 21 años');
        }
        else{
           alert('Es mayor de edad')
        }
    }
}

const boton = document.querySelector("#btn_Mostrar");
boton.addEventListener("click", Edad);
