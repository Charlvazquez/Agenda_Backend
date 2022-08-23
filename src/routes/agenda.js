import { Router } from "express";
import { actualizarServicio, AgregarContacto, borrarServicio, getAgenda, getLista, getListas, getServicio } from "../controllers/agendaController.js";
const router = Router();

router.get('/',getAgenda);
router.post('/',AgregarContacto);
router.put('/:id',actualizarServicio);
router.delete('/:id',borrarServicio);
router.get('/:id',getServicio);
//router.get('/selectiva/salud')
router.get('/Lista/servicios',getListas) //ruta para mostrar las los datos de otras tablas
router.get('/servicio/:id',getLista)//ruta para buscar un dato en especifico de las consultas
export default router;