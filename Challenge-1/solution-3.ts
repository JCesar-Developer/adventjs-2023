function findFirstRepeated3(gifts: number[]): number {
  if (gifts.length === 0) {
    return -1;
  }

  const indicesMap: Map<number, number> = new Map();

  let i = 0;
  for (const giftId of gifts) {
    if (indicesMap.has(giftId)) {
      return giftId;
    } else {
      indicesMap.set(giftId, i++);
    }
  }

  return -1;
}

const __giftIds = [2, 1, 3, 5, 3, 5]
console.log(findFirstRepeated3( __giftIds ));

const __giftIds2 = [1, 2, 3, 4]
console.log(findFirstRepeated3( __giftIds2 ));

const __giftIds3 = [5, 1, 5, 1]
console.log(findFirstRepeated3( __giftIds3 ));

const __giftIds4 = [1]
console.log(findFirstRepeated3( __giftIds4 ));

const __giftIds5: number[] = []
console.log(findFirstRepeated3( __giftIds5 ));

const __giftIds7 = [-2, -2, 1, 1];
console.log(findFirstRepeated3( __giftIds7 ));