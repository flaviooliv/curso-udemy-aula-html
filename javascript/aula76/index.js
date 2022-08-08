// produto
// camiseta, caneca, lapis

function produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

const camiseta = new camiseta("regata", 7.5);
