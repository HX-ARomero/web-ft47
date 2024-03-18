![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Subset Sum

## Introducción

Dada una suma objetiva, 'target' y un arreglo de números positivos:

* Devolvé **true** si cualquier combinación de números en el arreglo suma el target.
* Devolvé **false** si los números no pueden ser usados para sumar el target  

### IMPORTANTE

Cada número en el arreglo solo se puede usar una vez.

#### Ejemplos

subsetSum( **[1,10,5,3], 9** );
**output**: true <= 1 + 5 + 3

subsetSum( **[1,10,5,3], 19** );
**output**:true <= add all 4

subsetSum( **[1,10,5,3], 17** );
**output**:false

subsetSum( **[1,10,5,3], 2** );
**output**:false

subsetSum( **[1,10,5,3], 10** );
**output**:true <= 10 + 0 = 10
