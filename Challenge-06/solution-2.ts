export function _maxDistance(movements: string) {
  let rightMovements: number = movements.split('>').length - 1; 
  let leftMovements: number = movements.split('<').length - 1;
  let randomMovements: number = movements.split('*').length - 1;

  if( rightMovements >= leftMovements ) {
    rightMovements += randomMovements;
  } else {
    leftMovements += randomMovements;
  }
  return Math.abs(rightMovements - leftMovements);
}