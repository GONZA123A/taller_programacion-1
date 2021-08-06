export default class Cuentas {

    usuario;
    password;

    constructor(d1,d2)
    {
        this.usuario = d1;
        this.password = d2;

    }

    guardarCuenta()
    {
        let cuenta = {
            usuario: this.usuario,
            password: this.password
        }
        let lista = [];
        if("cuenta" in localStorage)
        {

            lista = JSON.parse(localStorage.getItem("cuenta"));
            
            lista.push(cuenta);

            //para que se guarde en el cache y no se borre lo echo o escrito
            localStorage.setItem("cuenta", JSON.stringify(lista));

        }
        else{

            lista.push(cuenta);

            localStorage.setItem("cuenta", JSON.stringify(lista));
        }
        
    }

    listarCuentas()
    {
        let lista = [];

        lista = JSON.parse(localStorage.getItem("cuenta"));

        return lista;
    }

    eliminarCuenta(index)
    {
        let lista= JSON.parse(localStorage.getItem("cuenta"))
        this.lista.splice(index, 1)
        localStorage.setItem("cuenta",JSON.stringify(lista));
    }
}
