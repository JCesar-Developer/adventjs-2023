export function findNaughtyStep(original: string, modified: string) {
  if( Math.abs(original.length - modified.length) > 1 ) throw new Error('Invalid input');
  if( original === modified ) return '';

  const maxLength = Math.max(original.length, modified.length);

  for( let i = 0; i < maxLength; i++ ) {
    if( original[i] !== modified[i] ) {
      return ( modified.length > original.length ) 
        ? modified[i] 
        : original[i];
    }
  }
}