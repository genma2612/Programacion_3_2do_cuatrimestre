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