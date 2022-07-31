const nome = "Flavio";
const sobrenome = "Gonçalves";
const idade = 25;
const peso = 60;
const alturaEmCm = 1.7;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2019 - idade;

console.log(`${nome} ${sobrenome} tem  ${idade} anos, pesa ${peso} kg`);
console.log(
  `tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`
);
console.log(`${nome} nasceu em ${anoNascimento} .`);
