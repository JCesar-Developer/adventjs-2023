export function _findNaughtyStep(original: string, modified: string) {
  if( !modified ) throw new Error('Invalid input');
  if( Math.abs(original.length - modified.length) > 1 ) throw new Error('Invalid input');
  
  if( original === modified ) return '';

  if( modified.length > original.length ) {
    for( let i = 0; i <= modified.length; i++ ) {
      if ( original[i] !== modified[i] ) return modified[i];
    }
  } else {
    for( let i = 0; i <= original.length; i++ ) {
      if ( original[i] !== modified[i] ) return original[i];
    }
  }
}