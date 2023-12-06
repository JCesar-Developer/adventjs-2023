function findFirstRepeated ( gifts: any[] ) {
  let repeatedGifs: {gifId: number, index: number}[] = [];
  let firstGifRepeated: number = -1;

  if(gifts.length == 0) return -1;

  //Get repeated gifts
  const getRepeatedGifs = (): void => {
    let index = 1;
  
    gifts.forEach( gifId => {
      for( let i = index; i <= gifts.length; i++ ) {
        if(gifId === gifts[i]) {
          repeatedGifs.push({ gifId, index: i });
        }
      }
      index++;
    })
  }

  getRepeatedGifs();
  if( repeatedGifs.length == 0 ) return firstGifRepeated;

  //Get first repeated gift with the closest partner
  const getFirstAndClosestPartnerRepeatedGif = (): void => {
    const ids = repeatedGifs.map( repGif => repGif.index );
    const minIndex = Math.min(...ids);
  
    for (const repGif of repeatedGifs) {
      if (repGif.index === minIndex) {
        firstGifRepeated = repGif.gifId;
        break; 
      }
    }
  }

  getFirstAndClosestPartnerRepeatedGif();
  return firstGifRepeated;
}

const giftIds = [2, 1, 3, 5, 3, 5]
console.log(findFirstRepeated( giftIds ));

const giftIds2 = [1, 2, 3, 4]
console.log(findFirstRepeated( giftIds2 ));

const giftIds3 = [5, 1, 5, 1]
console.log(findFirstRepeated( giftIds3 ));

const giftIds4 = [1]
console.log(findFirstRepeated( giftIds4 ));

const giftIds5: number[] = []
console.log(findFirstRepeated( giftIds5 ));

const giftIds7 = [-2, -2, 1, 1];
console.log(findFirstRepeated( giftIds7 ));

//Conclusiones: Aquí me retrasé porqué no entendí bien el enunciado.
//Tengo que detenerme más antes de empezar a codificar y asegurarme de entender correctamente.