# DAY 2: Ponemos en marcha la fábrica

### --- Instrucciones ---

En el taller de Santa, los elfos tienen una **lista de regalos** que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una **lista de los regalos que se pueden fabricar.**

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

Por ejemplo:

~~~javascript
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
~~~

### --- Solución ---

Utilizaremos el método `filter` para devolver los juguetes que pueden ser creados. Si ninguno puede ser creado, se devolverá un arreglo vacio.
La función `every` nos retornará un booleano si todos los caracteres del juguete analizado están includos en el material. Si están incluidos, el juguete puede crearse, si no están incluidos, el juguete no se podrá crear.


~~~typescript
export function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter(gift => 
    [...gift].every(character => materials.includes(character))
  );
}
~~~

### --- Mejor resultado ---

![challenge-1-result](best-result.JPG)