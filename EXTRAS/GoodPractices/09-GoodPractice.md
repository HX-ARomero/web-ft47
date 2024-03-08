# Principios SOLID

👉 Single Responsibility Principle (S) - Principio de Responsabilidad Única

👉 Open-Closed Principle (O) - Principio de Abierto/Cerrado

👉 Liskov Substitution Principle (L) - Principio de Sustitución de Liskov

👉 Interface Segregation Principle (I) - Principio de Segregación de la Interfaz

👉 Dependency Inversion Principle (D) - Principio de Inversión de Dependencias

## (S) - Principio de responsabilidad única

> Cada clase o función debe tener una única responsabilidad. Esto simplifica la comprensión, el mantenimiento y la modificación del código en el futuro.

Podemos imaginarnos el caos de un equipo de fútbol donde cada jugador no cumple un rol, ni tiene un lugar específico dentro de la cancha.

Veámoslo en un ejemplo simple: La siguiente función calcula el área de un rectángulo y muestra el resultado:

```js
function calculateArea(a, b) {
  const result = a * b;
  console.log(`El resultado es ${result}`);
  return result;
}

calculateArea(2, 4);
```

Refactorizando para aplicar este principio lograremos un código que facilita su comprensión y mantenimiento.

```js
function printMessage(message, result) {
  console.log(message, result);
}

calculateArea(2, 4);
function calculateArea(a, b) {
  return a * b;
}

printMessage('El resultado es', calculateArea(2, 4));
```

## (O) - Principio de abierto-cerrado

> Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión, pero cerradas para su modificación.

Un ejemplo en código:

```js
class Ingredients {
  products = ['Tomate', 'Lechuga', 'Aceite'];

  getIngredients() {
    return this.productos;
  }
}
```

Si quisiéramos añadirle la posibilidad de ingresar un nuevo ingrediente sin modificar la funcionalidad previa (reapetando así el principio) haríamos lo siguiente:

```js
class Ingredients {
  products = ['Tomate', 'Lechuga', 'Aceite'];

  getIngredients() {
    return this.productos;
  }

  addIngredient(product) {
    this.products.push(product);
  }
}
```

## (L) - Principio de Sustitución de Liskov

> Los objetos de una superclase deben ser reemplazables por objetos de una subclase sin afectar la corrección del programa.

Por ejemplo en el manejo de errores ante una petición HTTP:

```js
function getCharacters(url, errorHandler) {
    axios(url)
        .then({ data } => data.json())
        .catch(error => errorHandler(error))
    }

const internalErrorHandler = function handle(error) {
    console.log(error);
};

const externalErrorHandler = function handle(error) {
    sendErrorToExternalService(error);
};

getCharacter(url, internalErrorHandler);
getCharacter(url, externalErrorHandler);
```

> Utilizando el principio de Liskov, podemos tener varias funciones que manejan el error, y al momento de ejecutar una petición HTTP manejar su error con cualquiera de ellas.
> Es mejor tener interfaces específicas, en lugar de una sola interfaz general. Y esto aplica también a las funciones en JavaScript.

## (I) principio de segregación de la interfaz

> Una clase debe implementar únicamente las interfaces o métodos que necesita, es decir, no debe tenrer métodos que no utilice.

En el siguiente ejemplo, la clase padre posee métodos que no necesariamente se utilizan.

```js
class Book {
  constructor() {
    /* ----- */
  }

  getAuthor() {
    /* ----- */
  }
  getStock() {
    /* ----- */
  }
  getURL() {
    /* ----- */
  }
}

class PhysicalBook extends Book {
  constructor() {
    super();
  }
}

class DigitalBook extends Book {
  constructor() {
    super();
  }
}
```

Refactorizando podemos cumplir con el principio de segregación de la interfaz, donde cada clase sólo tiene los métodos que utiliza:

```js
class Book {
  constructor() {
    /* ----- */
  }

  getAuthor() {
    /* ----- */
  }
}

class PhysicalBook extends Book {
  constructor() {
    super();
  }
  getStock() {
    /* ----- */
  }
}

class DigitalBook extends Book {
  constructor() {
    super();
  }
  getURL() {
    /* ----- */
  }
}
```

## (D) - Principio de inversión de dependencia

> En este principio se establecen que las dependencias deben de estar en las abstracciones y no en las concreciones, en otras palabras, nos piden que las clases nunca dependan de otras clases y que toda esta relación debe estar en una abstracción. Este principio tiene dos reglas:
>
> 1. Los módulos de alto nivel no deben de depender de módulos de bajo nivel. Esta lógica debe de estar en una abstracción.
> 2. Las abstracciones no deben de depender de detalles. Los detalles deberían depender de abstracciones.

Por ejemplo al necesitar conectarnos a una base de datos para cambiar el password no debemos depender directamente de la conexión general, sino que debemos recibir una instancia de una clase que implemente una interfaz común de conexión.

```js
class DBConnection {
  connect() {
    /* ----- */
  }
}

class ChangePassword {
  constructor() {
    this.newConnection = new DBConnection();
  }
}
```

Refactorizando, cumplimos con el principio de inversión de dependencia:

```js
class DBConnection {
  connect() {
    /* ----- */
  }
}

class PostgreSQLConnection {
  connect {
    /* ----- */
  }
}

class ChangePassword {
  constructor(connection) {
    this.newConnection = connection
  }
}
```

> No debemos olvidar que las reglas SOLID son una herramienta útil, pero no debemos aplicarlas en todos los casos. Lo ideal es conocerlas, y aplicarlas cuando el problema lo requiera.

[Buenas prácticas 08](./08-GoodPractices.md)

[Buenas prácticas 10](./10-GoodPractices.md)

