function findNaughtyStep(original: string, modified: string) {

  if (original === modified) return '';

  const maxLength = Math.max(original.length, modified.length);

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      return modified.length > original.length 
        ? modified[i] 
        : original[i];
    }
  }
}

const original = 'abcd'
const modified = 'abcde'
console.log( findNaughtyStep(original, modified) ); // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2) ); // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)); // ''

const original4 = ''
const modified4 = ''
console.log(findNaughtyStep(original4, modified4)); // ''

const original5 = 'aaaa'
const modified5 = 'aaaaa'
console.log(findNaughtyStep(original5, modified5)); // 'f'