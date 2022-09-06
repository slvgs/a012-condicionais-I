let idade = Number(prompt("Qual a sua idade?"));
let isTerminouOmedio = confirm("Terminou o Ensino Médio?");
let isCursandoOutraFaculdade = confirm("Esta cursando outra faculdade?");

if (idade >= 18) {
  console.log("O usuário é maior de idade!");
} else {
  console.log("O usuário é menor de idade!");
}

if (isTerminouOmedio == true) {
  console.log("Terminou o Ensino Médio!");
} else {
  console.log("O usuário não concluiu o Ensino Médio!");
}

if (isCursandoOutraFaculdade) {
  console.log("O usuário esta cursando outra faculdade");
} else {
  console.log("O usuário NÃO está cursando outra faculdade!");
}
// da para por a variavel direto no if, sem adicionar ===true, pois ele já entende que é true