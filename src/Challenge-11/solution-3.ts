function getIndexsForPalindrome(word: string): number[] | null {
  const isPalindrome = (w: string) => w === w.split("").reverse().join("")
  const changeCharacters = (string: string, index1: number , index2: number ): string => {
    let charArray: string[] = string.split('');
    let temp: string = charArray[index1];

    charArray[index1] = charArray[index2];
    charArray[index2] = temp;

    return charArray.join('');
  }

  if( isPalindrome(word) ) return [];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      const modifiedWord: string = changeCharacters(word, i, j);

      if (isPalindrome(modifiedWord)) {
        return [i, j];
      }
    }
  }

  return null;
}

export default getIndexsForPalindrome;