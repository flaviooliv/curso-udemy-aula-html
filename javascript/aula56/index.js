function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${nome} está ${assunto}.`;
    },
  };
}

const p1 = criaPessoa("flavio", "oliveira");
console.log(p1.fala("falando sobrejs"));
