export function findFirstRepeated(gifts: number[]): number {
  const repeated: number = gifts.filter((gift, i) => gifts.indexOf(gift) !== i )[0];
  return (repeated) ? repeated : -1;
}