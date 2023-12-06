function manufacture(gifts: string[], materials: string) {
  let giftsCreated: string[] = [];
  
  gifts.forEach( gift => {
    let canBeCreated = true;
    
    for (let character of gift) {
      materials.includes(character) 
        ? canBeCreated 
        : canBeCreated = false;
    }

    if( canBeCreated ) giftsCreated.push(gift)
  })

  return giftsCreated;
}

//Test 1
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log( manufacture(gifts, materials) );// ["tren", "oso"]

//Test 2
const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'
console.log( manufacture(gifts2, materials2) );// ["tren", "oso"]

//Test 3
const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'
console.log( manufacture(gifts3, materials3) );// ["tren", "oso"]
