function createChristmasTree(ornaments: string, height: number): string {
  let tree = '';
  const totalOrnaments = ornaments.length;
  const whiteSpace = ' '
  const newline = '\n';
  const trunk = '|';

  let i = 0;

  for (let rowLength = 1; rowLength <= height; rowLength++) {
    tree += whiteSpace.repeat(height - rowLength);
    let charPosition = 0;
    
    while (charPosition < rowLength) {
      const ornamentIndex = i % totalOrnaments;
      tree += ornaments[ornamentIndex] + whiteSpace;
      charPosition++;
      i++;
    }
    tree = tree.slice(0, -1) + newline;
  }
  
  tree += whiteSpace.repeat(height - 1) + trunk + newline;
  return tree;
}

export default createChristmasTree;