export function __manufacture(gifts: string[], materials: string) {
  if( !gifts || !materials ) throw new Error('Invalid input');
  if( typeof gifts !== 'object' || typeof materials !== 'string' ) throw new Error('Invalid input');

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