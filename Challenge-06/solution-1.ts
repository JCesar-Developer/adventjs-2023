export function _maxDistance(movements: string) {
  let rightMovements: number = 0;
  let leftMovements: number = 0;
  let randomMovements: number = 0;

  for( let char of movements ) {
    if( char === '>' ) rightMovements++
    else if( char === '<' ) leftMovements++
    else randomMovements++
  }

  if( rightMovements > leftMovements || rightMovements === leftMovements  ) {
    rightMovements += randomMovements;
  } else {
    leftMovements += randomMovements;
  }

  return Math.abs(rightMovements - leftMovements);
}