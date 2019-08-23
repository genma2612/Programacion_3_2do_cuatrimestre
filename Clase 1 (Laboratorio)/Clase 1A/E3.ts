function Funcioncita(numero:number, opcional?:string) : void
{
    if(opcional == undefined)
    {
        console.log(-numero);
    }
    else
    {
        for (let index = 0; index < numero; index++) {
            console.log(opcional);
        }
    }
}

function FuncioncitaConRetorno(numero:number, opcional?:string) : any
{
    if(opcional == undefined)
    {
        return -numero;
    }
    else
    {
        var retorno : string = "";
        for (let index = 0; index < numero; index++) {
            retorno += opcional + "\r\n";
        }
    }
    return retorno;
}
/*
Funcioncita(2);
Funcioncita(10);
Funcioncita(2,"hola");
Funcioncita(3,"chau");
*/
console.log(FuncioncitaConRetorno(5));
console.log(FuncioncitaConRetorno(5,"retorno"));
console.log(FuncioncitaConRetorno(1));
console.log(typeof(FuncioncitaConRetorno(1)));
console.log(FuncioncitaConRetorno(1,"retorno de nuevo"));