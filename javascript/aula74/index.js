function pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

const pessoa1 = new pessoa("luiz", "O.");
const pessoa2 = new pessoa("maria", "A.");

console.dir(pessoa1);
console.dir(pessoa2);
