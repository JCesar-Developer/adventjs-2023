function __findFirstRepeated (gifts: number[]): number {
  if( typeof gifts !== 'object' ) throw new Error('parameter provided must be a number');
  if( gifts.length <= 1 ) return -1;

  const idsMap = new Map<number, boolean>();

  for (const giftId of gifts) {
    if (idsMap.has(giftId)) return giftId;
    else idsMap.set(giftId, true);
  }

  return -1;
}
