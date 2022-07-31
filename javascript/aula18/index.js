/*function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = criaPessoa("Flavio", "oliveira", 25);
const pessoa2 = criaPessoa("daniel", "oliveira", 14);
const pessoa3 = criaPessoa("jose", "oliveira", 27);
const pessoa4 = criaPessoa("ruan", "oliveira", 30);*/

const pessoa1 = {
  nome: "luiz",
  sobrenome: "oliveira",
  idade: 25,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
  },
};

pessoa1.fala();
