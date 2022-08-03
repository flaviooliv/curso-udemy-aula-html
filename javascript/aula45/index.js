function retornaHora(data) {
  if (!(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date.");
  }
}
