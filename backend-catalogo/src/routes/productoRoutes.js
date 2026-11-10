import { Router } from 'express';

import {
  obtenerProductos,
  obtenerProductoPorId
} from '../controllers/productoController.js';

// Creamos un enrutador independiente para el catálogo.
const router = Router();

// Ruta para consultar todos los productos.
router.get('/productos', obtenerProductos);

// Ruta para consultar un producto individual mediante su id.
router.get('/productos/:id', obtenerProductoPorId);

// Exportamos el enrutador para registrarlo en app.js.
export default router;
