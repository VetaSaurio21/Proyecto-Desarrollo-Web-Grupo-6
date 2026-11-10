import { Router } from 'express';

import {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} from '../controllers/productoController.js';

// Creamos un enrutador independiente para el catálogo.
const router = Router();

// Ruta para consultar todos los productos.
router.get('/productos', obtenerProductos);

// Ruta para consultar un producto individual mediante su id.
router.get('/productos/:id', obtenerProductoPorId);

// Ruta para registrar un producto nuevo.
router.post('/productos', crearProducto);

// Ruta para actualizar un producto existente.
router.put('/productos/:id', actualizarProducto);

// Ruta para eliminar un producto existente.
router.delete('/productos/:id', eliminarProducto);

// Exportamos el enrutador para registrarlo en app.js.
export default router;
