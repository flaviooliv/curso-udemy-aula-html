const form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inpuAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inpuAltura.value);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();
}
