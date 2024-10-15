let titulo = document.querySelector ('h1');
titulo.innerHTML = "Eu quero dar o Botão";

function botãoTeste () {
    console.log("Botão foi clicado");
}

function botãoAlerta () {
    alert("Botão foi alertado");
}

function botãoPergunta (){
    let cidade = prompt("Fale um nome de uma cidade:")
    alert(`A cidade escolhida foi  ${cidade}`);
}

function botãoSoma (){
    let numero1 = parseInt(prompt("Coloque um Número Inteiro"));
    let numero2 = parseInt(prompt("Coloque um Número Inteiro"));
    let total = numero1 + numero2;
    alert(`O resultado final é: ${total}`);
}