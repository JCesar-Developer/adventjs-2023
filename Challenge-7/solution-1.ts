export function _drawGift(size: number, symbol: string) {
  if( typeof size !== 'number' || typeof symbol !== 'string' ) throw new Error('Invalid input');
  if( size < 1 ) throw new Error('Size must be greater than zero');

  const space: string = ' ';
  let gift: string = '#'.repeat(size);

  if( size > 1 ) {
    const specialSize: number = size - 2;
    let equatDraw = '#'.repeat(size) + symbol.repeat(specialSize) + '#'

    if ( size == 2 ) {

      gift = space + gift + '\n' + equatDraw + '\n' + gift;

    } else {
      let hemisDraw: string = '';
      let invertHemisDraw: string = '';
      let i = 0;

      while( i < specialSize ) {
        let newLine = '#' + symbol.repeat(specialSize) + '#' + symbol.repeat(i) + '#';
        i++;
        
        if( i < specialSize ) newLine += '\n'
        
        hemisDraw = hemisDraw + space.repeat(size - i - 1) + newLine;
        invertHemisDraw += newLine;
      }
    
      invertHemisDraw = invertHemisDraw.split('\n').reverse().join('\n');
    
      gift = space.repeat(size-1) + gift + '\n' + hemisDraw + '\n' + equatDraw + '\n' + invertHemisDraw + '\n' + gift;
    }

  } 

  return gift + '\n';
}