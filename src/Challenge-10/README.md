# DÍA 10: 🎄 Crea tu propio árbol de navidad

## Instrucciones

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un **árbol de Navidad 🎄 personalizado** en cuestión de segundos.

Para crearlo nos pasan una **cadena de caracteres para formar el árbol** y un **número que indica la altura del mismo.**

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de **forma cíclica** hasta llegar a la altura indicada. **Como mínimo siempre nos pasarán uno.**

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter `|` en el centro y, finalmente, un salto de línea `\n.`

### Por ejemplo:

~~~javascript
//Si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:
   1
  2 3
 1 2 3
1 2 3 1
   |

//Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:
  *
 @ o
* @ o
  |
~~~

### A tener en cuenta:
- El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
- Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
- Los adornos tienen un espacio en blanco entre ellos de separación. 
- Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.

## Solución

~~~typescript
/** @Score 270puntos */
function createChristmasTree(ornaments: string, height: number): string {
  let currentHeight: number = 0;
  let i: number = 0;
  let tree: string = ''  
  
  // Bucle principal que construye cada fila del árbol
  while( currentHeight < height) {
    let rowSize: number = 0;
    let row: string = '';
    
    // Bucle interno que construye cada adorno de la fila
    while( rowSize <= currentHeight) {
      row += ornaments[i % ornaments.length] + ' ';
      rowSize++;
      i++;
    }
    
    // Agrega espacio en blanco al principio de la fila
    row = ' '.repeat(height - currentHeight - 1) + row;
    // Corta último espacio en blanco y agrega salto de linea
    tree += row.slice(0, -1) + '\n'
    currentHeight++;
  }
  
  // Agrega la base del tronco del árbol y último salto de linea
  return tree + ' '.repeat(height - 1) + '|\n' ;
}
~~~

## Mejor resultado

![challenge-10-result](best-result.JPG)