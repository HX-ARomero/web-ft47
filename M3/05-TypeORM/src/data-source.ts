import "reflect-metadata"
import { DataSource } from "typeorm"
import { Videogame } from "./entity/Videogame"
import { Platform } from "./entity/Platform"

export const AppDataSource = new DataSource({
    //* CREDENCIALES
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "demo",
    //* Borrar y volver a crear tablas
    synchronize: true,
    //* Mostrar comandos SQL en consola
    logging: false,
    //* Pasamos nuestros modelos o "Entidades"
    entities: [Videogame, Platform],
    migrations: [],
    subscribers: [],
})
