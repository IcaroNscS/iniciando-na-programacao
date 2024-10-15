function hello () {
    console.log("Hello World!");
}

hello();

function nome (){
    let nome = prompt("Qual seu nome?");
    alert(`Olá ${nome}`)
}

nome();

function numero() {
    let numero = parseInt(prompt("Digite um número:"));
    let dobro = numero*2
    alert(`O dobro do número escolhido é: ${dobro}`)
}

numero();

function media() {
    let numero1 = parseInt(prompt("Escolha o 1 número:"));
    let numero2 = parseInt(prompt("Escolha o 2 número:"));
    let numero3 = parseInt(prompt("Escolha o 3 número:"));

    let media = (numero1 + numero2 + numero3) /3

    alert(`A média dos números é: ${media}`)
}

media();

function maior() {
    let n1 = parseInt(prompt("Digite 1 Número:"));
    let n2 = parseInt(prompt("Digite o 2 Número:"));

    if(n1 > n2){
        alert(`${n1} é Maior que ${n2}`);
    }else if(n1 == n2){
        alert(`${n1} é Igual a ${n2}`);
    }else{
        alert(`${n2} é Maior que ${n1}`);
    }
}

maior();

function same() {
    let escolhido = parseInt(prompt("Digite um Número"));
    let dobro = escolhido * escolhido;

    alert(`${escolhido}, foi o Número Escolhido, Multiplicando esse Número por ele mesmo teremos: ${dobro} como resultado`)
}

same();