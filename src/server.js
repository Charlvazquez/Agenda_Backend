import express  from "express";
import categoriaRuta from "./routes/categorias.js";
import personaRuta from './routes/personas.js';
import agendaRuta from './routes/agenda.js'
import morgan from "morgan";
import cors from 'cors'

const app = express();

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/categorias",categoriaRuta)
app.use('/personas',personaRuta)
app.use("/agenda",agendaRuta)

export default app;