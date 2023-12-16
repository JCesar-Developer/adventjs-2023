export function adjustLights(lights: string[]) {
  const option = lights.map((_, i) => ['🟢', '🔴'][i%2] ) 
  
  let changes1: number = 0;
  let changes2: number = 0;
  
  lights.forEach((light, i) => {
    (light !== option[i]) 
      ? changes1++
      : changes2++;
  })
  
  return Math.min(changes1, changes2)
}