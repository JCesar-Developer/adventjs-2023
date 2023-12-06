function manufacture2(gifts: string[], materials: string): string[] {
  return gifts.filter(gift => 
    [...gift].every(character => materials.includes(character))
  );
}

//Test 1
const _gifts = ['tren', 'oso', 'pelota']
const _materials = 'tronesa'
console.log( manufacture2(_gifts, _materials) );// ["tren", "oso"]

//Test 2
const _gifts2 = ['juego', 'puzzle']
const _materials2 = 'jlepuz'
console.log( manufacture2(_gifts2, _materials2) );// ["tren", "oso"]

//Test 3
const _gifts3 = ['libro', 'ps5']
const _materials3 = 'psli'
console.log( manufacture2(_gifts3, _materials3) );// ["tren", "oso"]
