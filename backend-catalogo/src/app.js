
import express from 'express';
import morgan from 'morgan';
import productoRoutes from './routes/productoRoutes.js';

// Creamos la aplicación Express.
const app = express();

// Permitimos que Express interprete solicitudes con contenido JSON.
app.use(express.json());

// Mostramos en la terminal las solicitudes HTTP recibidas.
app.use(morgan('dev'));

// Ruta temporal para comprobar que el backend funciona.
app.get('/api', (req, res) => {
  res.status(200).json({
    mensaje: 'API del catálogo funcionando correctamente'
  });
});

// Registramos las rutas de productos bajo el prefijo /api.
app.use('/api', productoRoutes);

// Exportamos la aplicación para utilizarla desde index.js.
export default app;
