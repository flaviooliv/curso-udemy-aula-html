function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}


conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo(;)
}