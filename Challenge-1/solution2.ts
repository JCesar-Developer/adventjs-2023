function findFirstRepeated2(gifts: number[]): number {
  if (gifts.length === 0) {
    return -1;
  }

  const indicesMap: Map<number, number> = new Map();

  for (let i = 0; i < gifts.length; i++) {
    const gifId = gifts[i];

    if (indicesMap.has(gifId)) {
      return gifId;
    } else {
      indicesMap.set(gifId, i);
    }
  }

  return -1;
}

const _giftIds = [2, 1, 3, 5, 3, 5]
console.log(findFirstRepeated2( _giftIds ));

const _giftIds2 = [1, 2, 3, 4]
console.log(findFirstRepeated2( _giftIds2 ));

const _giftIds3 = [5, 1, 5, 1]
console.log(findFirstRepeated2( _giftIds3 ));

const _giftIds4 = [1]
console.log(findFirstRepeated2( _giftIds4 ));

const _giftIds5: number[] = []
console.log(findFirstRepeated2( _giftIds5 ));

const _giftIds7 = [-2, -2, 1, 1];
console.log(findFirstRepeated2( _giftIds7 ));

//Conclusiones: No conocía el objeto MAP y sus propiedades.