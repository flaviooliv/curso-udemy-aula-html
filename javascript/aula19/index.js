/*
primitivos- string, number, boolean, undefined, null (bigint, symbol)
*/
const a = {
  nome: "flavio",
  sobrenome: "oliveira",
};
const b = a;

b.nome = "gilson";
console.log(a);
console.log(b);
