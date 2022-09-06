let nacionalidade = prompt("Qual a sua nacionalidade?").toLocaleLowerCase();
const resposta = nacionalidade

const aceitas = ["brasileira", "uruguaia", "argentina", "chilena", "colombiana"]

if(aceitas.includes(nacionalidade)){
    console.log('Nacionalidade aceita! Você é: '+ nacionalidade)
}else{
    console.log("Nacionalidade não enconstrada")
}


/*if (resposta === "brasileira") {
  console.log("Nacionalidade aceita! BRASILEIRA!");
} else if (resposta === "uruguaia") {
  console.log("Nacionalidade aceita! URUGUAIA");
} else if (resposta === "chilena") {
  console.log("Nacionalidade aceita! CHILENA");
} else if (resposta === "argentina") {
  console.log("Nacionalidade aceita! ARGENTINO");
} else if (resposta === "colombiana") {
  console.log("Nacionalidade aceita! COLOMBIANO");
} else {
  console.log("Nacionalidade não encontrada");
}*/
