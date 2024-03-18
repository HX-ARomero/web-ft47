![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# spyOn

## Introducción

Implementa tu propia versión de la función **spyOn** que hace lo siguiente:

- Toma una función como parámetro
- Devuelve una función spy que toma cualquier numero de argumentos
- spy llama a la función y devuelve lo que ella devuelve
- spy tiene los siguientes métodos:
  - **.getCallCount()**: Devuelve la cantidad de veces que el spy fue llamado
  - **.wasCalledWith(val)**: devuelve true si la función fue alguna vez llamada con ese valor, else false
  - **.returned(val)**: devuelve true si alguna vez devolvió ese valor.

### Ejemplos

```javascript
function adder(n1, n2) { return n1 + n2; }

const adderSpy = spyOn( adder );

adderSpy.getCallCount(); // 0

adderSpy(2, 4); // returns 6
adderSpy.getCallCount(); // 1

adderSpy(3, 5); // returns 8
adderSpy.getCallCount(); // 2
adderSpy.wasCalledWith(2); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(6); // true
adderSpy.returned(9); // false
```
