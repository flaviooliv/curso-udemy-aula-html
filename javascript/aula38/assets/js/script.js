const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroudcolorBody = estilosBody.backgroundColor;
console.log(backgroudcolorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
}
