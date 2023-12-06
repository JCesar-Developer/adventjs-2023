# AdventJS 2023

### ¿Qué es AdventJS?

¡25 días y 25 desafíos de lógica de programación!

El mayor reto Hispano-parlante de lógica de programación celebrado entre el 01 y el 25 de diciembre de la edición 2023.

**¿Abre superado todos los días de retos?**  Conoce mis mejores test y soluciones, con los que participe en este AdventJS - Desafío 2023. 🚀

### Sobre el reto, su creador y sus patrocinadores

- El reto: https://adventjs.dev/en#retos
- Creador: Miguel Angel Duran (Midu) - https://midu.dev/ 
- Patrocinadores: https://adventjs.dev/#sponsors 

## Empezando

### Arquitectura del proyecto

Todos los desafíos cuentan con la siguiente arquitectura:
1. `README.md`, Documento donde se detalla el enunciado desafío.
2. `solution-[number].ts`, Documento donde se encuentran la función que resuelve el desafío. Cabe señalar, que habrá más de una solución; siendo la primera la menos eficiente y la solución de mayor número, la de mejor eficiencia y legibilidad.
3. `challenge.test.js`, Test unitarios que se han utilizado para resolver la lógica del desafío.
4. `best-result.js`, imagen con el mejor resultado obtenido entre las diferentes soluciones.

### Arrancando el proyecto

##### Para arrancar todos los tests al mismo tiempo: 
1. Instala las dependencias en tu entorno de desarrollo: `npm -i`
2. Ejecutar en la terminal de comandos: `npm run test`

##### Para arrancar los test de un único desafío y ver todos los detalles de los tests:
1. Instala las dependencias en tu entorno de desarrollo: `npm -i`
2. Ejecutar en la terminal de comandos: `npm run test .\Challenge-[number]\`

##### Para ver los resultados finales de los desafíos:
1. Asegurate de tener instalado de manera global el paquete TS-NODE: `npm install -g ts-node`
2. Instala el tipado de Typescript: `npm -i`
3. Ejecutar en la terminal de comandos: `ts-node .\solutions.ts`