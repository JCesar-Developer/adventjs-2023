export function manufacture(gifts: string[], materials: string): string[] {
  if( !gifts || !materials ) throw new Error('Invalid input');

  return gifts.filter(gift => 
    [...gift].every(character => materials.includes(character))
  );
}