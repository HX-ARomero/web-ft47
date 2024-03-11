const allCharacters = [
  {
    id: 1,
    name: "Goku",
    ki: "60.000.000",
    maxKi: "90 Septillion",
    race: "Saiyan",
    gender: "Male",
    description:
      "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044374/hlpy6q013uw3itl5jzic.webp",
    affiliation: "Z Fighter",
    deletedAt: null,
  },
  {
    id: 2,
    name: "Vegeta",
    ki: "54.000.000",
    maxKi: "19.84 Septillion",
    race: "Saiyan",
    gender: "Male",
    description:
      "Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044422/i9hpfjplth6gjudvhsx3.webp",
    affiliation: "Z Fighter",
    deletedAt: null,
  },
  {
    id: 3,
    name: "Piccolo",
    ki: "2.000.000",
    maxKi: "500.000.000",
    race: "Namekian",
    gender: "Male",
    description:
      'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de "vástago" y formando un lazo de amistad con este.',
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044481/u9fhpc9smihu2kud3cuc.webp",
    affiliation: "Z Fighter",
    deletedAt: null,
  },
  {
    id: 4,
    name: "Bulma",
    ki: "0",
    maxKi: "0",
    race: "Human",
    gender: "Female",
    description:
      "Bulma es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball, Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es hija del Dr. Brief y su esposa Panchy, hermana menor de Tights y una gran amiga de Son Goku con quien inicia la búsqueda de las Esferas del Dragón. En Dragon Ball Z tuvo a Trunks, primogénito de quien sería su esposo Vegeta, a su hija Bra[3] y su hijo adulto del tiempo alterno Trunks del Futuro Alternativo.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044496/bifhe9qarbrgvm0tsiru.webp",
    affiliation: "Z Fighter",
    deletedAt: null,
  },
  {
    id: 5,
    name: "Freezer",
    ki: "530.000",
    maxKi: "52.71 Septillion",
    race: "Frieza Race",
    gender: "Male",
    description:
      "Freezer es el tirano espacial y el principal antagonista de la saga de Freezer.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044513/ux3n5u0tjdvysjao4w8s.webp",
    affiliation: "Army of Frieza",
    deletedAt: null,
  },
  {
    id: 6,
    name: "Zarbon",
    ki: "20.000",
    maxKi: "30.000",
    race: "Frieza Race",
    gender: "Male",
    description:
      "Zarbon es uno de los secuaces de Freezer y un luchador poderoso.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044531/jcdgte2shoaj2jh0ruob.webp",
    affiliation: "Army of Frieza",
    deletedAt: null,
  },
  {
    id: 7,
    name: "Dodoria",
    ki: "18.000",
    maxKi: "20.000",
    race: "Frieza Race",
    gender: "Male",
    description:
      "Dodoria es otro secuaz de Freezer conocido por su brutalidad.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044548/m2mixyphepp8qwcigb3g.webp",
    affiliation: "Army of Frieza",
    deletedAt: null,
  },
  {
    id: 8,
    name: "Ginyu",
    ki: "9.000",
    maxKi: "25.000",
    race: "Frieza Race",
    gender: "Male",
    description:
      "Ginyu es el líder del la élite de mercenarios de mayor prestigio del Ejército de Freeza, la cual lleva el nombre de Fuerzas Especiales Ginew en su honor[9].",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699129673/dxsl3rjhrfmajo2gealz.webp",
    affiliation: "Army of Frieza",
    deletedAt: null,
  },
  {
    id: 9,
    name: "Celula",
    ki: "250.000.000",
    maxKi: "5 Billion",
    race: "Android",
    gender: "Male",
    description:
      "Cell conocido como Célula en España, es un bioandroide creado por la computadora del Dr. Gero, quien vino del futuro de la línea 3 con la intención de vengarse de Goku por haber acabado con el Ejército del Listón Rojo, y con ello el sueño de todo villano: dominar el mundo. Es el antagonista principal del Arco de los Androides y Cell.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044573/mz09ghskyzf0skprredi.webp",
    affiliation: "Freelancer",
    deletedAt: null,
  },
  {
    id: 10,
    name: "Gohan",
    ki: "45.000.000",
    maxKi: "40 septillion",
    race: "Saiyan",
    gender: "Male",
    description:
      "Son Gohanda en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es un mestizo entre saiyano y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan.",
    image:
      "https://res.cloudinary.com/dgtgbyo76/image/upload/v1699044627/kigekwjt2m8nwopgvabv.webp",
    affiliation: "Z Fighter",
    deletedAt: null,
  },
];

export default allCharacters;
