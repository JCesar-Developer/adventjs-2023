export function _manufacture(gifts: string[], materials: string) {
  if( !gifts || !materials ) throw new Error('Invalid input');
  if( typeof gifts !== 'object' || typeof materials !== 'string' ) throw new Error('Invalid input');

  let giftsCreated: string[] = [];
  if( gifts.length === 0 ) return giftsCreated;
  if( materials.length === 0 ) return giftsCreated;

  const materialsSet = new Set(materials);
  for( const gift of gifts ) {
    const giftSet = new Set(gift); 
    let canBeCreated = true;

    for( const character of giftSet ) {
      if( !materialsSet.has(character) ) canBeCreated = false;
    }

    if( canBeCreated ) giftsCreated.push(gift);
  }

  return giftsCreated;
}