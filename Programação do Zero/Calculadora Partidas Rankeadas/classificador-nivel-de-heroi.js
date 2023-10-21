function calcularRank(vitorias,derrotas){
    let nivel;
    let saldo = vitorias - derrotas;

    if(saldo <=10){
        nivel = "Ferro";
    }else if(saldo > 10 && saldo < 21){
        nivel = "Bronze";
    }else if(saldo > 20 && saldo < 51){
        nivel = "Prata";
    }else if(saldo > 50 && saldo < 81){
        nivel = "Ouro";
    }else if(saldo > 80 && saldo < 91){
        nivel = "Diamante";
    }else if(saldo > 90 && saldo < 101){
        nivel = "Lendário";
    }else{
        nivel = "Imortal";
    }
    console.log(`O herói tem um saldo de ${saldo} e está no nível ${nivel}`)
}

calcularRank(125,44);