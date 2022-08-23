import { Router } from "express";
import { borrarPersona, crearPersona, getPersona, getPersonas, PersonalEdad, PersonasdeReynosa } from "../controllers/personaController.js";
const router = Router();

router.get('/',getPersonas);
router.post('/',crearPersona);
router.put('/:id');
router.delete('/:id',borrarPersona);
router.get('/:id',getPersona);
router.get('/ciudad/reynosa',PersonasdeReynosa)
router.get('/personal/edad',PersonalEdad)

export default router;