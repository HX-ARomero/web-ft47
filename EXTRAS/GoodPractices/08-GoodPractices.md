# BUENAS PRÁCTICAS

## UTILIZAR LOS MÉTODOS "every" y "some" DE ARRAYS

- Podríamos verificar que todos los elementos de un array sean de un tipo específico del siguiente modo...
```js
const numbers = [1, 2, 3];
const mix = [1, 2, 3, "Hello world!"];

const numberValidator = (array) => {
  for (const number of array) {
    if (typeof number !== "number") return false;
  }
  return true;
};

console.log(numberValidator(numbers)); // true
console.log(numberValidator(mix)); // false
```
- Pero es mejor utilizar el método "every" de arrays.
  - Que verifica si "todos los elementos" cumplen la condición recibida como callback:
```js
console.log(numbers.every(number => typeof number === "number")); // true
console.log(mix.every(number => typeof number === "number")); // false
```

- También podemos utilizar el método "some"
  - Que verifica si "al menos un elemento" cumple la condición:
```js
console.log(mix.some(number => typeof number === "number")); // true
```

[Buenas prácticas 07](./07-GoodPractices.md)

[Buenas prácticas 09](./09-GoodPractices.md)