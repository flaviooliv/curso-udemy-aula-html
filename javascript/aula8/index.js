const nome = "Luiz Otavio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmCm = 1.8;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2019 - idade;

console.log(nome, sobrenome, "tem", idade, "anos , pesa", peso, "kg");
console.log("tem", alturaEmCm, "de altura e seu IMC é de", indiceMassaCorporal);
console.log(nome, "nasceu em", anoNascimento, ".");
