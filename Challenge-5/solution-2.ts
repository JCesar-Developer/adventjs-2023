export function cyberReindeer(road: string, time: number) {
  if (!Number.isInteger(time)) throw new Error('Invalid input: "time" should be an integer');
  if (time < 1) throw new Error('Invalid input: "time" should be greater than or equal to 1');
  if (typeof road !== 'string') throw new Error('Invalid input: "road" should be a string');
  if (road.length < 1) throw new Error('Invalid input: "road" should be greatter than or equal to 1');

  const steps: string[] = [];
  const santa: string = 'S';
  let position: number = 0;

  for (let i = 0; i < time; i++) {
    if (i === 5) {
      road = road.replace(/\|/g, '*');
      position++;
    }

    const patron = [...road];
    patron[position] = santa;
    
    if (position > 0) {
      patron[0] = '.';
    }

    steps.push(patron.join(''));

    if (patron[position + 1] !== '|') {
      position++;
    }
  }

  return steps;
}