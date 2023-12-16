function getIndexsForPalindrome(word: string): number[] {
  const middle: number = word.length / 2;

  const getLeftSide = (word: string) => {
    return word.slice(0, middle);
  }
  
  const getRightSide = (word: string) => {
    return ( word.length % 2 ) 
      ? word.slice(middle + 1) 
      : word.slice(middle);
  }

  const getReversedRighSide = (rightSide: string) => {
    return rightSide.split("").reverse().join("");
  }
  
  const changeCharacters = (string: string, index1: number, index2: number) => {
    let charArray = string.split('');
    let temp = charArray[index1];

    charArray[index1] = charArray[index2];
    charArray[index2] = temp;

    return charArray.join('');
  }

  

  let resp: number[] | null = null;

  [...word].forEach((_, i) => {
      if(resp) return;
      for(const j in [...word]) {
        const newWord = changeCharacters(word, i, parseInt(j));
        const leftSide = getLeftSide(newWord);
        const rightSide = getRightSide(newWord);
        const revRightSide = getReversedRighSide(rightSide);
        
        if(leftSide == revRightSide) {
          resp = [i, parseInt(j)]
          break;
        } 
      }
  })

  return (( new Set(resp) ).size == 1 ) ? [] : resp;
}

export default getIndexsForPalindrome;