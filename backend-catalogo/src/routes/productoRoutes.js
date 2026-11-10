import { Router } from 'express';
import { obtenerProductos } from '../controllers/productoController.js';

// Creamos un enrutador independiente para el catálogo.
const router = Router();

// Ruta para consultar todos los productos.
router.get('/productos', obtenerProductos);

// Exportamos el enrutador para registrarlo en app.js.
export default router;
