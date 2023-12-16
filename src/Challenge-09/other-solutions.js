/*
  Author: dportillo23
  GitHub: https://github.com/dportillo23/adventjs-2023/blob/master/challenges/9th/my-answers.js
  Score: 390pts
*/
function adjustLights(lights) {
  const lightsOptions = ['🟢', '🔴'];
  let redFirst = 0;
  let greenFirst = 0;
  let i = 0;

  // Itera sobre cada luz
  for (const light of lights) {
      // Por cada iteración compara la luz con el resultado de un booleano transformado en número, de esta manera cada iteración par tendrá un 0 o un 1 alternadamente. 
      const rest = i % 2;

      // Si la luz es igual al color que se espera, el booleno será true, y al transformarlo en número será 1, por lo que se sumará a la variable correspondiente. 
      
      //Esto creará el contraste entre ambas alternativas de opciones válidas, la que empieza por luces rojas y la que empieza por luces verdes.
      redFirst += +(light === lightsOptions[+(rest !== 0)]);
      greenFirst += +(light === lightsOptions[+(rest === 0)]);
      i++;
  }

  // Devuelve el resultado con el menor número de cambios.
  return Math.min(redFirst, greenFirst);
}