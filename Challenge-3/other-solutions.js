/*
  Author: Achelogy
  GitHub: https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-3/main.ts
  Score: ¿?
  */

function findNaughtyStep(original, modified) {
  //Se almacenan las palabras como menosLarga y másLarga, haciendo uso del método sort. 
  const [lessWords, mostWords] =
    [original, modified].sort((a, b) => a.length - b.length)

  //Se devuelve la letra de más haciendo uso del método find. Para ello, se compara cada uno de los caracteres de la palabra más larga con cada uno de los caracteres de la palabra más corta, hasta encontrar la palabra de más.
  return [...mostWords].find((x, i) => lessWords[i] != x) ?? "";
}