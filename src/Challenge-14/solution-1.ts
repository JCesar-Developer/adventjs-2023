function maxGifts(houses: number[]): number {
  const arrLength = houses.length;

  if (arrLength === 0) return 0;
  if (arrLength === 1) return houses[0];

  const maxSums: number[] = [];

  maxSums[0] = houses[0];
  maxSums[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < arrLength; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + houses[i]);
  }

  return Math.max(maxSums[arrLength - 1], maxSums[arrLength - 2]);
}
