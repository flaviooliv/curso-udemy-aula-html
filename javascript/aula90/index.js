const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
};
fetch("pagina1.html")
  .then((resposta) => {
    if (resposta.status != 200) throw new Error("ERRO 404 MOSSO");
  })
  .catch((e) => console.log(e));
