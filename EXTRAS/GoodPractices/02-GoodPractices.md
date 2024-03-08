# BUENAS PRÁCTICAS

## DECLARAR MÚLTIPLES VARIABLES

- Las siguientes formas de declarar variables pueden ser un poco confusas:
```js
let name = "Rick", lastName = "Sanchez", origin = "Earth";
const userName = "Morty",
      password = "123456"
```
- Si lo hacemos como sigue, resulta mucho mas legible a simple vista:
```js
let name = "Rick";
let lastName = "Sanchez";
let origin = "Earth";
// O incluso mejor:
const user = {
  userName: "Morty",
  password: "123456"
}
```

## NO UTILIZAR FUNCIONES O NÚMEROS SUELTOS

- En lugar de funciones y números sueltos, nos valemos de variables para hacer mas legible nuestro código:
```js
const printHello = () => console.log("Hola mundo!!!");
const  oneSecond = 1000;
setTimeout(printHello, oneSecond * 5); // 5000 nos obligaría a interpretar qué significa...
```

[Buenas prácticas 01](./01-GoodPractices.md)

[Buenas prácticas 03](./03-GoodPractices.md)