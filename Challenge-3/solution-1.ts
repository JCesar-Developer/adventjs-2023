function _findNaughtyStep(original: string, modified: string) {

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


const _original = 'abcd'
const _modified = 'abcde'
console.log( _findNaughtyStep(_original, _modified) ); // 'e'

const _original2 = 'stepfor'
const _modified2 = 'stepor'
console.log(_findNaughtyStep(_original2, _modified2) ); // 'f'

const _original3 = 'abcde'
const _modified3 = 'abcde'
console.log(_findNaughtyStep(_original3, _modified3)); // ''

const _original4 = ''
const _modified4 = ''
console.log(_findNaughtyStep(_original4, _modified4)); // ''

const _original5 = 'aaaa'
const _modified5 = 'aaaaa'
console.log(_findNaughtyStep(_original5, _modified5)); // 'f'