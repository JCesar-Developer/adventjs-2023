export function decode(message: string): string {
  const regex = /\(\w*\)/g
  
  while(message.match(regex)) {
    message.match(regex).forEach( msg => {
      message = message.replace(msg, (match => {
        return [...match].slice(1,-1).reverse().join('');
      }))
    })
  }

  return message;
}