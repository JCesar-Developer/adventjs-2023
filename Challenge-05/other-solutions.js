/*
  Author: dportillo23
  GitHub: https://github.com/dportillo23/adventjs-2023/blob/master/challenges/5th/my-answers.js
  Score: 260pts
  */
function cyberReindeer2(road, time) {
  //Inicializa el arreglo final con el input como primer elemento.
  const roadStates = [road];
  let currentRoad = road;
  let sPosition = 0;
  const roadLength = road.length;

  //Itera por cada vez que se avanza una unidad de tiempo.
  for (let t = 1; t < time; t++) {
    //Si la unidad de tiempo es 5, todos los '|' son cambiados por '*'
    if (t === 5) {
        road = road.replaceAll('|', '*');
    }

    const nextPosition = sPosition + 1;
    
    //Entra en el condicional si la siguiente posición no es '|'
    if (road[nextPosition] !== '|') {
      //Asigna la primera mitad del recorrido a una variable  
      const before = '.' + road.substring(1, nextPosition);
      //Asigna la segunda mitad del recorrido +1 a una variable  
      const after = road.substring(nextPosition + 1, roadLength);
      //Coloca la posición de Santa 'S' entre ambas mitades.
      currentRoad = `${before}S${after}`;
      //Reasigna el valor de la posición
      sPosition = nextPosition;
    }
    //Agrega el resultado al arreglo final.
    roadStates.push(currentRoad);
  }

  //Devuelve el arreglo final.
  return roadStates;
}

/*
  Author: Achalogy
  GitHub: https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-5/main.ts
  Score: ¿?
  */
function cyberReindeer3(road, time) {
  //Inicializa el arreglo final con el input como primer elemento.
  let moves = [road]
  let position = 0
  let store = "."

  //Itera por cada vez que se avanza una unidad de tiempo.
  for (let i = 1; i < time; i++) {
    //Si la unidad de tiempo es 5, todos los '|' son cambiados por '*'
    if (i == 5) road = road.replace(/\|/g, "*")
    //Si existe un 'S.' o 'S*', lo reemplaza por el caracter almacenado en 'store' + 'S'
    const patron = road.replace(/S[\.\*]/, `${store}S`)
    //Entra en el condicional si el patrón es diferente del camino
    if (patron != road) {
      //Almacena el caracter anterior a la posición de Santa 'S' en la variable 'store'
      position++
      store = road[position]
    }
    //Reasigna el valor del camino
    road = patron
    //Agrega el resultado al arreglo final.
    moves.push(road)
  }

  //Devuelve el arreglo final.
  return moves;
}