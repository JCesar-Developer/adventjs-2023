export function __drawGift(size: number, symbol: string) {
  if( typeof size !== 'number' || typeof symbol !== 'string' ) throw new Error('Invalid input');
  if( size < 1 ) throw new Error('Size must be greater than zero');

  const space: string = ' ';
  let gift: string = '#'.repeat(size);

  if( size > 1 ) {
    const specialSize: number = size - 2;
    const northPole: string = space.repeat(size-1) + gift;
    const equator: string = '#'.repeat(size) + symbol.repeat(specialSize) + '#'
    const southPole: string = gift;

    if ( size == 2 ) gift = `${northPole}\n${equator}\n${southPole}`;
    else {
      let northTropic: string = '';
      let southTropic: string = '';
      let i = 0;

      while( i < specialSize ) {
        let newLine = '#' + symbol.repeat(specialSize) + '#' + symbol.repeat(i) + '#';
        i++;
        
        if( i < specialSize ) newLine += '\n'
        
        northTropic = northTropic + space.repeat(size - i - 1) + newLine;
        southTropic += newLine;
      }
    
      southTropic = southTropic.split('\n').reverse().join('\n');
    
      gift = `${northPole}\n${northTropic}\n${equator}\n${southTropic}\n${southPole}`;
    }

  } 

  return `${gift}\n`;
}