![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Find Word Starting With

## Introducción

Dado un "libro" y un string para buscar,  devolver todos los indices donde la palabra empieza con ese string.

El libro vendrá con dos cosas: un id y un texto. **La búsqueda tiene que ser case insensitive.**

### Ejemplo

```javascript
const book = {
    id: 1,
    text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}
```

findWordsStartingWith **(book, 'de')**
**output:** [23]

findWordsStartingWith **(book, 'un')**
**output:** [ 6, 14, 43]
