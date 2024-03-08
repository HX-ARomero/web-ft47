# BUENAS PRÁCTICAS

## CREACIÓN DE NUEVOS ARREGLOS Y OBJETOS

- No utilizamos sus clases constructoras...
```js
const array = new Array();
const object = new Object();
```
- Es mucho mas claro utilizando literales:
```js
const array = [];
const object = {};
```

## CONVERSIÓN DE TIPOS

- Evitamos utilizar los siguientes operadores, cuya sintaxis es algo confusa:
```js
const number = 5;
const string = "7";
!!number; // true
+string; // 7
number + ""; // "5"
```
- Es mas claro si utilizamos el método del tipo de dato correspondiente:
```js
Boolean(number); // true
String(number); // 7
Number(string); // "5"
```

[Buenas prácticas 04](./04-GoodPractices.md)

[Buenas prácticas 06](./06-GoodPractices.md)