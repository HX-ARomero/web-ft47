import express = require('express');
import tareaRouter from './routes/tareaRouter';

const app = express();

app.use(express.json());
app.use("/tareas", tareaRouter);

export default app;