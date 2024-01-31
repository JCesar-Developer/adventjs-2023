function getIndexsForPalindrome(word: string): number[] {
  const middle  = word.length / 2;

  const changeCharacters = (string: string, index1: number , index2: number ): string => {
    let charArray: string[] = string.split('');
    let temp: string = charArray[index1];

    charArray[index1] = charArray[index2];
    charArray[index2] = temp;

    return charArray.join('');
  }

  let resp: number[] = [];

  for(let i = 0; i < word.length; i++){
    for(let j = 0; j < word.length; j++) {
      const nw: string = changeCharacters(word, i, j);
      const leftSide: string = nw.slice(0, middle);
      const rightSide: string = nw.slice(Math.ceil(middle));
      const revRightSide: string = rightSide.split("").reverse().join("");

      if(leftSide == revRightSide) {
        resp = [i, j]
        break;
      } 
    }
    
    if(resp) break;
  }

  return (( new Set(resp) ).size == 1 ) ? [] : resp;
}
export default getIndexsForPalindrome;