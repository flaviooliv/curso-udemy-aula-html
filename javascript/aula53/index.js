function retornaFuncao() {
  const nome = "flavio";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.dir(funcao);
