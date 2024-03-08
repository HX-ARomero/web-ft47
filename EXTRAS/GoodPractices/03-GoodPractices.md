# BUENAS PRÁCTICAS

## NOMBRAR CORRECTAMENTE LAS VARIABLES Y FUNCIONES

- El siguiente código:

```js
const ch = {
  name: 'Rick',
  lastName: 'Sanchez',
  hi() {
    console.log(`My full name is ${this.name} ${this.lastName}`);
  },
};
ch.hi(); // No nos da información de quién llama al método o qué hace el método...
```

- Será mucho mas legible utilizando nombres descriptivos:

```js
const character = {
  name: 'Rick',
  lastName: 'Sanchez',
  getFullName() {
    console.log(`My full name is ${this.name} ${this.lastName}`);
  },
};
character.getFullName(); // Utilizando nombres mas largos, pero descriptivos...
```

[Buenas prácticas 02](./02-GoodPractices.md)

[Buenas prácticas 04](./04-GoodPractices.md)