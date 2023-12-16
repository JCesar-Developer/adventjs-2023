/* 
  Author: dportillo23
  GitHub: https://github.com/dportillo23/adventjs-2023/blob/master/challenges/8th/my-answers.js
  Score: 390 
*/
function organizeGifts(gifts) {
  //Regexp para obtener un patron ([numeros][letras])
  const regex = /[\d]+[a-z]/g;
  //Crea un array con los matches
  const matches = gifts.match(regex);
  let organization = '';
  
  //Recorre el array de matches
  for (const match of matches) {
      //Obtiene el ultimo caracter del match
      const lastIdx = match.length - 1;
      const letter = match[lastIdx];
      //Obtiene la cantidad de regalos
      const amount = match.substring(0, lastIdx);

      //Calcula la cantidad de pallets, cajas y bolsas
      const pallets = +amount / 50;
      const boxes = (+amount / 10) % 5;
      const bags = +amount % 10;

      //Agrega al string de respuesta la organizacion de los regalos
      organization += `[${letter}]`.repeat(pallets);
      organization += `{${letter}}`.repeat(boxes);
      organization += `(${letter.repeat(bags)})`.replace('()', '');
  }

  //Devuelve el resultado
  return organization;
}

/* 
  Author: Achalogy
  GitHub: https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-7/main.ts
  Score: ¿?
*/

function organizeGifts(gifts) {
  // Crea un arreglo con las cantidades numéricas de los regalos.
  const countGifts = gifts.match(/\d+/g)
  // Crea un arreglo con los nombres de los regalos.
  const nameGifts = gifts.match(/[^0-9]/g)

  let response = ""
  let i = 0

  // Recorre el arreglo de cantidades de regalos.
  for (let count of countGifts) {
    // Obtiene el nombre del regalo.
    const name = nameGifts[i]
    let newPattern = ""

    // Convierte la cantidad de regalos a número.
    count = +count

    // Calcula la cantidad de pallets, cajas y bolsas agregandolo a la variable 'newPattern' y por cada calculo, actualiza el valor de count.
    newPattern += `[${name}]`.repeat(count / 50)
    count %= 50

    newPattern += `{${name}}`.repeat(count / 10)
    count %= 10

    newPattern += `(${name.repeat(count)})`.repeat(+!!c)

    // Agrega el nuevo patrón a la respuesta.
    response += newPattern
    i++
  }

//Devuelve el resultado
  return response
}