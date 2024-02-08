# NODE

> Node Js es un entorno de ejecución (RUNTIME) de JavaScript creado en base al motor V8 de Google.

## Node Version Manager

- Nos permite tener instaladas varias versiones de Node a la vez
- Nos permite cambiar entre versiones
- [Video de cómo instalar Node Version Manager](https://www.youtube.com/watch?v=Z-Ofqd2yBCc)

## Módulos

- Conjunto de código organizado que se puede reutilizar en otras partes de un programa
- Ayudan a estructurar y mantener proyectos
- Un archivo es un módulo y un módulo es un archivo!!!
- En Node se utiliza en forma nativa el formato Common JS:
  - Utiliza `module.exports` para exportar desde un módulo
  - Utiliza `require` para importar

## Paquete

> Un paquete es código (módulos) mantenido y gestionado por un Gestor de Paquetes.

## NPM

> Node Package Manager es un Gestor de Paquetes

- Cuenta con una librería Open Source
- La librería incluye muchos módulos
- Los módulos están diseñados para ayudar en la construcción de apps
- Reduce la cantidad de código y lógica
- Reutilización de módulos escritos por terceros

## Algunos comandos de NPM

- `--save`: Fuerza a guardar en "package.json"
  - Actualmente es el valor por defecto
- `-g`: Dependencias globales (en mi computadora)
  - Instalando npm-check-updates
    - `npm install -g npm-check-updates`
      - Paquete para revisar versiones globales
    - `npm list -g -depth 0`
      - Nos da el listado de paquetes globales
    - Si corremos `ncu` en consola
      - Chequea en todo el contenido las versiones
        - globales contra las del package.json
- `npm update`: Actualizar dependencias
- `npm audit`: Auditar y actualizar dependencias
- `npm start`: Corre script (es un atajo)
- `npm test`: Corre script (es un atajo)
- `npm run nombre_script`
  - Para los que no tienen atajo
- `npm uninstall`: Desinstala un paquete
  - `npm uninstall cowsay`
    - También modificando "package.json"
      - borrar "node_modules"
      - y volver a correr `npm install`
- `npm install` y versiones:
  - `npm install nombre_paquete --save-exact`
    - En package.json: "nombre_paquete": "6.2.0"
  - `npm install nombre_paquete
    - En package.json: "nombre_paquete": "^6.2.0"
  - Forzar instalar una versión:
    - npm install react-router-dom@5.0.0
