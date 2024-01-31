function createChristmasTree(ornaments: string, height: number): string {
  if(height < 0 || ornaments.length === 0) {
    throw new Error('Invalid input');
  }

  let currentHeight: number = 0;
  let i: number = 0;
  let tree: string = ''  
  
  while( currentHeight < height) {
    let rowSize: number = 0;
    let row: string = '';
    
    while( rowSize <= currentHeight) {
      row += ornaments[i % ornaments.length] + ' ';
      rowSize++;
      i++;
    }
    
    row = ' '.repeat(height - currentHeight - 1) + row;
    tree += row.slice(0, -1) + '\n'
    currentHeight++;
  }
  
  return tree + ' '.repeat(height - 1) + '|\n' ;
}

export default createChristmasTree;