![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Has Balance Brackets

## Introducción

Crear un bracket validator. La idea es que chequee que los brackets estén balanceados correctamente.

Los brackets válidos son los siguientes:  **[ ] ( ) { }**

### Ejemplos

**input:** "{ [ ] ( ) }"
**output:** true

**input:** "{ [ ( ] ) }"
**output:** false

**input:** "{ [ ] ) }"
**output:** false

**input:** "{ [ }"
**output:** false

**input:** "{ [ ( [ { ( )[ ]{ } } ] ) ] }"
**output:** true

---

## Solución

### En Palabras

1. Tienes:
    * **"opening"** - **( { [** - y,
    * **"closing"** - **) } ]** - brackets.
2. Cada closing bracket tiene que corresponder con la opening bracket mas cercano que empareje.
3. Cada opening y closing bracket tienen que estar en pareja.

Entonces tienen que ir trackeando los opening brackets y fijarse si cuando encontramos una closing bracket, matchea con la opening bracket mas cercana

¿Qué  estructura de datos podemos utilizar para esto?
