export function drawGift(size: number, symbol: string) {
  if (!Number.isInteger(size) || size < 1 || typeof symbol !== 'string' || symbol.length !== 1) throw new Error('Size must be greater than zero');

  const space: string = ' ';
  let gift: string = '#'.repeat(size) + '\n';

  if( size > 1 ) {
    const northPole: string = space.repeat(size-1) + gift;
    const equator: string = '#'.repeat(size) + symbol.repeat(size-2) + '#\n';
    const southPole: string = gift;

    if ( size == 2 ) gift = `${northPole}${equator}${southPole}`;
    else {
      let northTropic: string = '';
      let southTropic: string = '';

      for (let i = 0; i < size-2; i++) {
        const newDraw: string = '#' + symbol.repeat(size-2) + '#' + symbol.repeat(i) + '#';
        northTropic += space.repeat(size-2-i) + newDraw + '\n';
        southTropic = newDraw + '\n' + southTropic;
      }
    
      gift = `${northPole}${northTropic}${equator}${southTropic}${southPole}`;
    }

  } 

  return gift;
}