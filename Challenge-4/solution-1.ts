export function decode(message: string) {
  const includeParenthesis = (string: string): boolean => {
    return string.includes('(') && string.includes(')');
  }

  const dontExistParenthesis = (charsInsideParenthesis: string, input: string): boolean => {
    if ( input !== '(' ) return true;
    else {
      return ( !charsInsideParenthesis.includes('(') )
        ? true
        : false;
    }
  }

  if ( includeParenthesis(message) ) {
    const words: string[] = message.split(' ')

    const decodedWords: string[] = words.map((word) => {

      if( includeParenthesis(word) ) {
        let decodedWord: string = '';
        let insideParen: boolean = false
        let charsInsideParen: string = '';

        [...word].forEach( char => {
          if( char !== '(' && !insideParen ) {
            decodedWord += char;
          }
          else {
            insideParen = true;
            if( char !== ')' && dontExistParenthesis(charsInsideParen, char) ) {
              charsInsideParen += char;
            }

            else if ( !dontExistParenthesis(charsInsideParen, char) ) {
              decodedWord += charsInsideParen;
              charsInsideParen = '';
              charsInsideParen += char;
            }

            else {
              insideParen = false;
              charsInsideParen += char;
              const charsReversed: string = [...charsInsideParen].reverse().slice(1, -1).join('');
              charsInsideParen = '';
              decodedWord += charsReversed;
            }
          }
        })

        if( includeParenthesis(decodedWord) ) {
          const groupOfChars = decodedWord.match(/[^()]+|\([^)]+\)/g) || [];
          decodedWord = '';
          
          for ( let chars of groupOfChars ) {
            if( !includeParenthesis(chars) ) {
              decodedWord += chars;
            } else {
              chars = chars.slice(1, -1).split('').reverse().join('')
              decodedWord += chars;
            }
          }
        }

        return decodedWord;
      }

      return word;
    })

    message = decodedWords.join(' ');
  }

  return message;
}