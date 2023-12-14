/*
  Author: Achelogy
  GitHub: https://github.com/Achalogy/advent-js-2023/blob/main/retos/reto-4/main.ts
  Score: ¿?
  */

function decode(message) {
  //El siguiente grupo de captura devolverá todos lo elemntos dentro de parentesis que no sean parentesis. 
  const regex = /\(([^()]+)\)/;

  //Con el método "test", se ejecutará el bucle while mientras existan grupos de captura. 
  while (regex.test(message)) {
    //Con "replace(regex, callback)" se reemplaza el objeto entre parentesis (obtenido gracias a regex) por el grupo caturado (ya sin parentesis) e invertido. 
    message = message.replace(regex, (_, group) => {
      return group.split('').reverse().join('');
    })
  }

  return message;
}