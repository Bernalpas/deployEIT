import express from 'express';
const router = express.Router();

import { 
    mostrarFormulario, 
    cargarFormulario
} from '../controllers/mongooseproduct.js';

/* GET users listing. */
router.get('/', mostrarFormulario);

router.post('/', cargarFormulario);

export default router;

