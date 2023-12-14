function _findFirstRepeated ( gifts: number[] ) {
  if( typeof gifts !== 'object' ) throw new Error('parameter provided must be a number');
  if( gifts.length <= 1 ) return -1;
  if( new Set(gifts).size === gifts.length ) return -1;

  const idsMap: Map<number, number> = new Map();

  for( let i = 0; i < gifts.length; i++ ) {
    const gifId = gifts[i];

    if (idsMap.has(gifId)) return gifId;
    else idsMap.set(gifId, i);
  }
}