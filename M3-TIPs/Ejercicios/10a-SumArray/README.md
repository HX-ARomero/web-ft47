![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Sum Array

## Introducción

En este caso se nos presentan dos elementos: una arreglo **ordenado** de números enteros  y un número entero.

El objetivo del ejercicio es encontrar si la combinación de dos números cualesquiera del arreglo, suman el número dado.

### Ejemplos

#### Existen dos valores

- **arreglo**: [2,4,5,9]
- **número**: 9
- **return**: true

#### No existen dos valores

- **arreglo**: [2,4,5,9]
- **número**: 12
- **return**: false

---

## Solución

Como todo ejercicio, existen múltiples soluciones para un mismo problema.
En este caso, analizáremos dos alternativas diferentes, luego determináremos cual es mejor.

### En palabras

1. Recorrer el arreglo con dos indices.
2. Chequear si la suma de ambas posiciones da el valor pasado por parámetro.
    1. Si da, hemos terminado. Encontramos los valores buscados.
    2. Si no, seguimos avanzando.
3. Si uno de los indices llego al final, hemos finalizado el recorrido y no existen dos valores en el arreglo que logren la suma esperada.
