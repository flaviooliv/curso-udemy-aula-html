async function executa() {
  const fase1 = await esperaAi("Fase 1", rand());
  console.log(fase1);

  const fase2 = await esperaAi("Fase 2", rand());
  console.log(fase2);

  const fase3 = await esperaAi("Fase 3", rand());
  console.log(fase3);

  console.log("terminamos na fase:", fase3);
}
executa();
