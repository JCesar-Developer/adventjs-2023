function _decode(message: string): string {
  const regex = /\(\w*\)/g

  while(message.match(regex)) {
    const inversedMssgs = message.match(regex);
  
    for( let invMsg of inversedMssgs ) {
      message = message.replace(invMsg, (match => {
        return [...match].slice(1,-1).reverse().join('');
      }))
    }
  }

  return message;
}