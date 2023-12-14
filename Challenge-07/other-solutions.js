/*
  Author: SantiMenendez19
  GitHub: https://github.com/SantiMenendez19/adventjs/blob/main/2023/challenge07/solution.js
  Score: ¿?
*/
function drawGift(size, symbol) {
  let output = ""

  //Crea la capa superior
  output += " ".repeat(size - 1 > 0 ? size - 1 : 0) + "#".repeat(size) + "\n"
  
  //Si 'size' es mayor que 1, entra en el condicional
  if (size > 1) {
    //Itera un bucle para crear y agregar la segunda capa, que es el conjunto de strings que están por debajo de la capa superior
    for (let i = 0; i < size - 2; i++) {
      output +=
          " ".repeat(size - 2 - i) +
          "#" +
          symbol.repeat(size - 2) +
          "#" +
          symbol.repeat(i) +
          "#" +
          "\n"
    }

    //Crea y agrega la capa intermedia
    output +=
      "#".repeat(size) +
      symbol.repeat(size - 2) +
      "#" +
      "\n"
    
    //Itera un bucle para crear y agregar el la cuarta capa, que es el conjunto de strings que están por debajo de la capa intermedia
    for (let i = size - 3; i >= 0; i--) {
      output +=
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(i) +
        "#" +
        "\n"
    }

    //Crea y agrega la capa inferior
    output += "#".repeat(size) + "\n"
  }

  //Devuelve el resultado
  return output
}

/*
  Author: Achalogy
  GitHub: https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-7/main.ts
  Score: ¿?
*/
function drawGift(size, symbol) {
  let bgSize = size - 2

  bgSize += +!(bgSize + 1)

  let response = ""
  let topCenter = ""
  let bottomCenter = ""

  for (const a of [...Array.from({ length: bgSize }).keys()]) {
    const c = "#"
      + symbol.repeat(bgSize)
      + "#" + symbol.repeat(a) + "#"
    bottomCenter = c + "\n" + bottomCenter
    topCenter += " ".repeat(bgSize - a) + c + "\n"
  }

  response = " ".repeat(size - 1) + "#".repeat(size) + "\n"
    + (topCenter
      + "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n"
      + bottomCenter
      + "#".repeat(size) + "\n").repeat(+!!(size - 1))

  return response
}