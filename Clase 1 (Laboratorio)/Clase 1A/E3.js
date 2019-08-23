"use strict";
function Funcioncita(numero, opcional) {
    if (opcional == undefined) {
        console.log(-numero);
    }
    else {
        for (var index = 0; index < numero; index++) {
            console.log(opcional);
        }
    }
}
function FuncioncitaConRetorno(numero, opcional) {
    if (opcional == undefined) {
        return -numero;
    }
    else {
        var retorno = "";
        for (var index = 0; index < numero; index++) {
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
console.log(FuncioncitaConRetorno(5, "retorno"));
console.log(FuncioncitaConRetorno(1));
console.log(typeof (FuncioncitaConRetorno(1)));
console.log(FuncioncitaConRetorno(1, "retorno de nuevo"));
//# sourceMappingURL=E3.js.map