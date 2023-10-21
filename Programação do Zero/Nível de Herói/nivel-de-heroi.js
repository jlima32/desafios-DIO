const nomeHeroi = "Nyx";
const xpHeroi = "9850";
let nivelHeroi;

if(xpHeroi < 1001){
    nivelHeroi = "Ferro";
}else if(xpHeroi > 1000 && xpHeroi < 2001){
    nivelHeroi = "Bronze";
}else if(xpHeroi > 2000 && xpHeroi < 5001){
    nivelHeroi = "Prata";
}else if(xpHeroi > 5000 && xpHeroi < 7001){
    nivelHeroi = "Ouro";
}else if(xpHeroi > 7000 && xpHeroi < 8001){
    nivelHeroi = "Platina";
}else if(xpHeroi > 8000 && xpHeroi < 9001){
    nivelHeroi = "Ascendente";
}else if(xpHeroi > 9000 && xpHeroi < 100001){
    nivelHeroi = "Imortal";
}else{
    nivelHeroi = "Radiante";
}

console.log(`O herói de nome ${nomeHeroi} está no nível ${nivelHeroi}`);