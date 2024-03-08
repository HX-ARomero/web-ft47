# BUENAS PRÁCTICAS

## UTILIZAR "Intl.ListFormat" PARA IMPRIMIR LISTADOS

- Podemos utilizar "join" para imprimir un listado...
```js
const characters = [ "Rick", "Morty", "Summer", "Beth" ];

console.log(characters.join(", "));
// Rick, Morty, Summer, Beth
```
- Pero lograremos un mejor resultado utilizando Intl.ListFormat.
  - Incluso nos permite seleccionar el formato según el idioma:
```js
console.log(new Intl.ListFormat("es").format(characters));
// Rick, Morty, Summer y Beth

console.log(new Intl.ListFormat("en").format(characters));
// Rick, Morty, Summer, and Beth

console.log(new Intl.ListFormat("fr").format(characters));
// Rick, Morty, Summer et Beth
```

> El objeto Intl.ListFormat habilita el formato de lista sensible al idioma.

> Intl.ListFormat.supportedLocalesOf(): Devuelve una matriz que contiene las configuraciones regionales proporcionadas que son compatibles sin tener que recurrir a la configuración regional predeterminada del tiempo de ejecución.

> Más información en: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat

[Buenas prácticas 06](./06-GoodPractices.md)

[Buenas prácticas 08](./08-GoodPractices.md)