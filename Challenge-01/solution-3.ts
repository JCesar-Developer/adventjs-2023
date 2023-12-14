function ___findFirstRepeated(gifts) {
  let position = 0;
  return gifts.some((g, i) => {
    if(gifts.indexOf(g) !== i) {
      return true;
    } else {
      position++;
      return false;
    }
  }) ? gifts[position] : -1;
}