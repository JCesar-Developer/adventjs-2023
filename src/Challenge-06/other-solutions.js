/*
  Author: SantiMenendez19
  GitHub: https://github.com/SantiMenendez19/adventjs/blob/main/2023/challenge06/solution.js
  Score: ¿?
*/
function maxDistance(movements) {
  let left = 0
  let right = 0
  let ast = 0
  
  //Destructuramos el string en todos sus caracteres y pasamos cada caracter en un bucle 'forEach'
  movements.split("").forEach(x => {
    //si el movimiento es '<' se agrega 1 a la variable left
    if ("<" == x) left++
    //si el movimiento es '>' se agrega 1 a la variable right
    else if (">" == x) right++
    //si no se cumple ningun caso se agrega 1 a la variable ast
    else ast++
  })

  //Con el condicional, se devuelve el valor positivo de la distancia + el total de asteriscos.
  return left > right 
    ? left + ast - right 
    : right + ast - left
}
  

/*
  Author: Achalogy
  GitHub: https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-6/main.ts
  Score: ¿?
*/
function maxDistance(movements) {
  let distance = 0

  //Se usa una expresión regular para capturar el total de '>'
  let right = movements.match(/>/g)?.length ?? 0
  //Se usa una expresión regular para capturar el total de '<'
  let left = movements.match(/</g)?.length ?? 0

  //Se calcula la distancia
  distance += right
  distance -= left

  //Se calcula los movimientos extra
  let extra = movements.length - (right + left)

  //Se devuelve el valor absoluto de la distancia + total de movimientos extra
  return Math.abs(distance) + extra
}

/*
  Author: dportillo23
  GitHub: https://github.com/dportillo23/adventjs-2023/blob/master/challenges/6th/my-answers.ts
  Score: 390 
*/
function maxDistance(movements) {
  //Se usa una expresión regular para capturar el total de '>'
  const left = movements.match(/</g)?.length ?? 0
  //Se usa una expresión regular para capturar el total de '<'
  const right = movements.match(/>/g)?.length ?? 0
  //Se devuelve el valor absoluto de la distancia + total de movimientos extra
  return Math.abs(right - left) + movements.length - (right + left)
}