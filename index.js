//Desafio DIO - criando variáveis para armazenar nome e experiência do personagem e retornar de acordo com o nível informada.

let nome = "Tyrek"
let xp = 1002

if (xp <= 1000){
    console.log("O herói " + nome + " está no nível Ferro")
}else if (xp >= 1001 && xp <= 2000){
    console.log("O herói " + nome + " está no nível Bronze")
}else if (xp >= 2001 && xp <= 5000){
    console.log("O herói " + nome + " está no nível Prata")
}else if (xp >= 5001 && xp <= 7000){
    console.log("O herói " + nome + " está no nível Ouro")
}else if (xp >= 7001 && xp <= 8000){
    console.log("O herói " + nome + " está no nível Platina")
}else if (xp >= 8001 && xp <= 9000){
    console.log("O herói " + nome + " está no nível Ascendente")
}else if (xp >= 9001 && xp <= 10000){
    console.log("O herói " + nome + " está no nível Imortal")
}else 
    console.log("O herói " + nome + " está no nível Radiante")