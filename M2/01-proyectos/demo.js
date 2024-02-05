//* BBDD
const personajes= [
  { id: 1, nombre:  "Homero", apellido: "Simpson" },
  { id: 2, nombre:  "Marge", apellido: "Bubbie" },
];

//* SERVIDOR

//* METODO HTTP: GET (Read)
//* URI: "http://nuestraApp/peronajes"
//* Cuerpo de la solicitud: ""
//* RESPUESTA: personajes

//* METODO HTTP: POST (Create)
//* URI: "http://nuestraApp/peronajes"
//* Cuerpo de la solicitud: { id: 3, nombre:  "Lisa", apellido: "Simpson" }
//* RESPUESTA: { id: 3, nombre:  "Bart", apellido: "Simpson" }

//* METODO HTTP: PUT (Update)
//* URI: "http://nuestraApp/peronajes/3"
//* Cuerpo de la solicitud: { nombre:  "Bartolomeo" }
//* RESPUESTA: { id: 3, nombre:  "Bartolomeo", apellido: "Simpson" }

//* METODO HTTP: DELETE (Delete)
//* URI: "http://nuestraApp/peronajes/1"
//* Cuerpo de la solicitud: ""
//* RESPUESTA: personajes

//* DNS: DOMAIN NAME SYSTEM
//* google.com (DNS) => 216.239.32.10