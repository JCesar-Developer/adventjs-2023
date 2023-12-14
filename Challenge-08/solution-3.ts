export function organizeGifts(gifts: string) {
  const giftPattern = /(\d+)([a-z])/g;

  return gifts.replace(giftPattern, (_, giftTotal, giftCode) => {
    const total = parseInt(giftTotal);
    const pallets = `[${giftCode}]`.repeat(Math.floor(total / 50));
    const boxes = `{${giftCode}}`.repeat(Math.floor((total % 50) / 10));
    const bags = giftCode.repeat(total % 10);
    
    return `${pallets}${boxes}${bags ? `(${bags})` : ''}`;
  });
}