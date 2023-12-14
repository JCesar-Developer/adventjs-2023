# DAY 1: ¡Primer regalo repetido!

### --- Instrucciones ---

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único. Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

Por ejemplo:

~~~javascript
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
~~~

### --- Solución ---

Con ayuda del método `filter`, crearemos un array con todos los elementos que se repiten en dentro del arreglo, esto lo conseguimo apuntando a que el espacio de memoria del elemento iterado, no sea igual al indice del iterador. 

Con `[0]`, devolvemos la primera coincidencia.

Si no existe número dentro este nuevo arreglo, devolvemos `-1`;

~~~typescript
export function findFirstRepeated(gifts: number[]): number {
  const repeated: number = gifts.filter((gift, i) => gifts.indexOf(gift) !== i )[0];
  return (repeated) ? repeated : -1;
}
~~~

### --- Mejor resultado ---

![challenge-1-result](best-result.JPG)