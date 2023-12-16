export function _organizeGifts(gifts: string) {
  if( typeof gifts !== 'string' ) throw new Error('invalid input');

  const sliptByType = /(\d+[a-z])/;
  const splitNumCode = /(\d+)([a-z])/;
  const giftsByType = gifts.split(sliptByType).filter(Boolean);

  let packagedGifts: string = '';

  for( let giftType of giftsByType ) {
    const [ giftNumber, giftCode ] = giftType.split(splitNumCode).filter(Boolean);
    const number = parseInt(giftNumber)

    if( isNaN(number) ) throw new Error('invalid input');

    const pallets: number = Math.floor( number / 50);
    const palletsReminder: number = number % 50;

    const boxes: number = Math.floor( palletsReminder / 10 );
    const boxesReminder: number = palletsReminder % 10;

    const bags: string = giftCode.repeat(boxesReminder);

    const packPallets = `[${giftCode}]`.repeat(pallets);
    const packBoxes = `{${giftCode}}`.repeat(boxes);
    const packBags = bags ? '(' + giftCode.repeat(boxesReminder) + ')' : '';    

    packagedGifts += `${packPallets}${packBoxes}${packBags}`
  }

  return packagedGifts;
}