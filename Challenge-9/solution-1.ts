//La logica es, solo puden haber dos resultados correctos, comparemos ambas posibilidades y escogemos la que requiera el menor número de cambios.
function adjustLights(lights: string[]) {
  const op1: string [] = lights.map((_, i) => ['🟢', '🔴'][i%2] ) 
  const op2: string [] = lights.map((_, i) => ['🔴', '🟢'][i%2] ) 

  let changes1: number = 0;
  let changes2: number = 0;
  
  lights.forEach((light, i) => {
    if(light !== op1[i]) changes1++;
    if(light !== op2[i]) changes2++;
  })
  
  return Math.min(changes1, changes2)
}
