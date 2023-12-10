//La logica es, solo puden haber dos resultados correctos, comparemos ambas posibilidades y escogemos la que requiera el menor número de cambios.
export function adjustLights(lights) {
  const patron1 = Array(lights.length).fill("🔴").map((v,i)=>i%2?"🟢":v)
  const patron2 = Array(lights.length).fill("🟢").map((v,i)=>i%2?"🔴":v)

  let c1 = 0
  let c2 = 0
  lights.forEach((v,i)=>{    
    if (v!==patron1.at(i)){
      c1++
    } else if (v!==patron2.at(i)){
      c2++
    }
  })
  return c1<c2? c1: c2
}