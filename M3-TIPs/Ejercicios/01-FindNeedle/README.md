![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Find Needle

## Introducción

Encontrar el índice de la primera aparición de un string (needle) dentro de otro (haystack).

Es decir, el objetivo del ejercicio es determinar si el primer string, needle, esta dentro del segundo, haystack, y en dicho caso, devolver el índice en el que esto ocurre.

### Ejemplos

#### Lo encuentra

- **needle**: redux
- **haystack**: react-redux
- **output**: 6

#### No lo encuentra

- **needle**: puntual
- **haystack**: pinky
- **output**: -1

En este caso, como el needle no se encuentra en el haystack el valor de salida es -1.

#### IMPORTANTE

Para la resolución de este ejercicio no se pueden utilizar los métodos **indexOf( )** ni **includes**

---

## Solución

### En palabras

1. Visitar cada caracter del haystack
2. Visitar cada caracter del needle, si el primer caracter coincide:  
    1. Comparar el segundo caracter del needle con el siguiente del haystack
    2. Continuar hasta llegar al final del needle o hasta que una comparación no sea igual
        1. Si llegamos al final del needle es que encontramos el indice
3. Si el primer caracter del needle no coincide, avanzo al próximo caracter
4. Llegamos al final del haystack y no encontramos ninguna coincidencia

Ahora sí, busquemos la forma de traducir lo que ya dijimos en palabras a código y ademas debemos evaluar la complejidad...
