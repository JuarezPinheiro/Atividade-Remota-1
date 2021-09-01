const listaDePecas = ["Bateria", "Motor", "Catalisador", "Anel de pistão", "Escapamento", "Freio"]

console.log(listaDePecas)

if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")  
} else { 
    console.log("Não há mais espaço na lista")
}

var peso = 500;

if(peso >= 100) {
    console.log("Peso da peça está adequado")
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "Radiador"

if (nomePeca.length > 3) {
    console.log("Nome adequado!!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}
