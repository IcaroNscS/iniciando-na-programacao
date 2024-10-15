let introducao = "Bem-Vindo ao jogo dos pontos";
let explicacao = "Acerte perguntas e acumule o máximo de pnts :)";

alert(`${introducao}`);
alert(`${explicacao}`);

let nome = prompt("Qual seu nome?:");
alert(` Que belo nome ${nome},  Seja Bem vindo(a) `);
alert("1.. 2.. 3.. QUE COMEÇE OS JOGOS");

let total = 0;
let perg1 = prompt("Quanto é 48/2?")

if(perg1 == 24){
    total += 50;
    alert("Você tem um QI acima de um Babuino parabens!!");
}else{
    alert ("Tu é petista ou um animal mesmo, melhore :(");
}

let perg2 = prompt("Quem é Melhor CR7(GOAT) ou Messi(Fraco)?")

if(perg2 == "CR7"){
    total += 50;
    alert("Você é uma pessoa sabia!!");
}else{
    alert ("Tu fede a Palmeirense:(");
}

let perg3 = prompt("Qual o Curso Superior SIT(GigaChads) ou SAT(Defaults)?")

if(perg3 == "SIT"){
    total += 50;
    alert("Tu possui o Molho!!");
}else{
    alert ("Você falhou como ser humano:(");
}

alert("E o resultado final é:");

if(total == 150){
    alert("Você já pode caminhar na superfice da lua, acertou todas");
}else if (total == 100) {
    alert("O seu maximo é o minimo de alguem... acertou 2");
}else if (total == 50) {
    alert("Antes o minimo do que nada né patrão, acertou 1");
}else{
    alert("O importante é que Jesus te ama :|, inimigo da inteligência");
}