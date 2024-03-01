import { AppDataSource } from "./data-source"
import { serverInitialize } from "./server";
const PORT = 3000;

AppDataSource.initialize()
    .then(async () => {
        console.log('Database connected');
        serverInitialize(PORT);
    })
    .catch(error => console.log(error))
