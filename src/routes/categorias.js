import { Router } from "express";
import {getCategorias,crearCategoria, borrarCategoria, categoriaSelectiva, actualizarCategoria, getCategoria, getCategoriaServicio} from "../controllers/categoriaController.js";
const router = Router();

router.get('/',getCategorias);
router.post('/',crearCategoria);
router.put('/:id',actualizarCategoria);
router.delete('/:id',borrarCategoria);
router.get('/:id',getCategoria);
router.get('/selectiva/salud',categoriaSelectiva)
router.get('/:id/servicio', getCategoriaServicio); //busqueda mediante el id de la categoria,traeria los servicios que corresponde y su personal

export default router;