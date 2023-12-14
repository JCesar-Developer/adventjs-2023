export function maxDistance(movements: string) {
  let distance: number = 0;
  let asterisk: number = 0;

  for (const move of movements) {
    switch( move ) {
      case '<': 
        distance -= 1;
        break;
      case '>':
        distance += 1;
        break;
      case '*': 
        asterisk++;
        break;
    } 
  }
  
  return Math.abs(distance) + asterisk;
}