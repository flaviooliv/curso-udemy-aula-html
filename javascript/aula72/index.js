function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: true,
  });
}

const p1 = new produto("camiseta", 20, 3);
p1.estoque = 500000;
console.log(p1);
