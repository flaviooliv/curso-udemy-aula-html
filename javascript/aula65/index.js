//filter, map, reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
