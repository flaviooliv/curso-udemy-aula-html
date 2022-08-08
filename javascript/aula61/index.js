function* gerador1() {
  yield "valor 1";
  yield "valor 2";
  yield "valor 3";
}

function* gerador2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}
