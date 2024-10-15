let nome = prompt("Qual seu Nome?:");

function imc (){
    let peso = parseFloat(prompt("Qual seu peso em (KG)?"))
    let altura = parseFloat(prompt("Qual sua altura em (CM)?:"))

    let media = peso/(altura * altura);

    alert(`Olá ${nome}o seu IMC é: ${media}`);
}

imc();

