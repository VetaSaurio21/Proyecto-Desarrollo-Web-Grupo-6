import app from './app.js';
import connectDB from './db.js';

// Puerto en el que escuchará nuestro backend.
const PORT = 4000;

// Función que inicia la aplicación.
const iniciarServidor = async () => {
  try {
    // Primero establecemos la conexión a MongoDB.
    await connectDB();

    // Si la conexión fue exitosa, iniciamos Express.
    app.listen(PORT, () => {
      console.log(`Servidor del catálogo ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No fue posible iniciar el backend:', error.message);

    // Terminamos el proceso si no podemos conectarnos a MongoDB.
    process.exit(1);
  }
};

// Ejecutamos la función de inicio.
iniciarServidor();
