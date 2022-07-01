const numero = Number(prompt("Digite um numero:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

/*
Raiz quadrada: 7.42958649595986
55.1987555 é inteiro: false
arredondando para baixo: 55
arredondando para cima: 56
com duas casas decimais: 55.20
*/
numeroTitulo.innerHTML = numero;

texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadrada:${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN:${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro:${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}.</p>`;
