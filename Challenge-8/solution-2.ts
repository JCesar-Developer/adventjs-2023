export function __organizeGifts(gifts: string) {
  if( typeof gifts !== 'string' ) throw new Error('Invalid input. Expected a string.');

  const sliptByType = /(\d+[a-z])/;
  const splitNumCode = /(\d+)([a-z])/;
  const giftsByType = gifts.split(sliptByType).filter(Boolean);

  return giftsByType.map(giftType => {
    const [ , giftNumber, giftCode ] = giftType.split(splitNumCode);
    const total = parseInt(giftNumber);

    const pallets = `[${giftCode}]`.repeat(Math.floor(total / 50));
    const boxes = `{${giftCode}}`.repeat(Math.floor((total % 50) / 10));
    const bags = giftCode.repeat(total % 10);

    return `${pallets}${boxes}${bags ? `(${bags})` : ''}`;
  }).join('');
}