export function cyberReindeer(road: string, time: number) {
  if (!Number.isInteger(time)) throw new Error('Invalid input: "time" should be an integer');
  if (time < 1) throw new Error('Invalid input: "time" should be greater than or equal to 1');
  if (typeof road !== 'string') throw new Error('Invalid input: "road" should be a string');
  if (road.length < 1) throw new Error('Invalid input: "road" should be greatter than or equal to 1');

  let result: string[] = [];
  let position: number = 0;
  let i: number = 0;
  
  while( i < time ) {

    if( i === 5 ) {
      road = road.replace(/\|/g, '*');
      position++
    }

    let patron = [...road];
    patron[position] = 'S';
    if ( patron.join('').match(/S/g).length > 1 ) patron[0] = '.'
    result.push(patron.join(''));
    
    if( patron[position + 1] !== '|' ) position++;
    i++;
  }
  
  return result;
}