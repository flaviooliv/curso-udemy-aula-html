let contador = 0;
let a = document.querySelectorAll("._acas");

a.forEach((v, i) => {
  setTimeout(() => {
    if (!v.classList.contains("._acat")) {
      v.click();
      contador++;
      console.log("você ja seguiu" + contador + "pessoas");
    } else {
      console.log("você ja segue esse usuario");
    }
  }, i * 10000);
});
