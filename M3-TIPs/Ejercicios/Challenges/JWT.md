# Desafío de programación: Crear un inicio de sesión con JWT usando Express y PostgreSQL

### Este desafío de programación consiste en crear un inicio de sesión que utilice JWT para autenticar a los usuarios en el lado del servidor utilizando Express y PostgreSQL. Además, se debe verificar la validez del JWT utilizando Thunder Client o cualquier otra herramienta similar.

## Requisitos previos
### Para completar este desafío de programación, se requiere conocimientos previos de:

- JavaScript
- Express
- PostgreSQL
- JWT

## Pasos

1. Crea una base de datos en PostgreSQL con el nombre "users" y una tabla con el nombre "users". La tabla deberá tener los siguientes campos:

```
id (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
email (VARCHAR(255), UNIQUE, NOT NULL)
password (VARCHAR(255), NOT NULL)
```

2. Instala los siguientes paquetes npm:


```bash
npm install express pg jsonwebtoken
```

3. Crea un archivo index.js en el directorio raíz de tu proyecto.

4. En el archivo index.js, crea una instancia de Express y configúrala para que use el middleware express.json().

5. Conéctate a la base de datos PostgreSQL utilizando el paquete pg.

6. Crea dos rutas en tu servidor Express: /signup y /login.

7. En la ruta /signup, crea un endpoint POST que reciba una solicitud con los campos email y password. Verifica que el correo electrónico no exista en la base de datos y, si es así, hasheé la contraseña y guárdala junto con el correo electrónico en la tabla users. Luego, crea y firma un JWT que contenga el ID del usuario y envíalo en la respuesta.

8. En la ruta /login, crea un endpoint POST que reciba una solicitud con los campos email y password. Verifica que el correo electrónico exista en la base de datos y que la contraseña ingresada sea correcta. Si todo es correcto, crea y firma un JWT que contenga el ID del usuario y envíalo en la respuesta.

9. Crea una función middleware que verifique la validez del JWT en cada solicitud. Si el JWT es válido, almacena el ID del usuario en req.user.

10. Agrega la función middleware creada en el paso anterior a todas las rutas que requieran autenticación.

11. Finalmente, utiliza Thunder Client o cualquier otra herramienta similar para enviar solicitudes a tus rutas /signup y /login y verificar que la autenticación funciona correctamente.

## Conclusiones

### Este desafío de programación ha demostrado cómo crear un inicio de sesión que utilice JWT para autenticar a los usuarios en el lado del servidor utilizando Express y PostgreSQL. Además, se ha verificado la validez del JWT utilizando Thunder Client o cualquier otra herramienta similar. Este proceso puede ser escalable y adaptable a diferentes proyectos de desarrollo web.