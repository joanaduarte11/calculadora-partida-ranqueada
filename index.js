let vitorias = 120
let derrotas = 8

function calculo(vitorias, derrotas) {
    return vitorias - derrotas;
}


function determinarNivel(resultado) {
    if(resultado <= 10) {
        return'Ferro'
    } else if(resultado > 10 && resultado <= 20) {
        return 'Bronze'
    } else if(resultado > 20 && resultado <= 50) {
        return 'Prata'
    } else if(resultado > 50 && resultado <= 80) {
        return'Ouro'
    } else if(resultado > 80 && resultado <= 90) {
        return'Diamante'
    } else if(resultado > 90 && resultado <= 100) {
        return 'Lendário'
    } else {
        return 'Imortal'
    }
}

let resultado = calculo(vitorias, derrotas);
let nivel = determinarNivel(resultado);

console.log(`O Herói tem saldo de ${vitorias} e está no nível ${nivel}`);