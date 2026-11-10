import mongoose from 'mongoose';

// Dirección de nuestra base de datos MongoDB local.
const MONGO_URI = 'mongodb://127.0.0.1:27017/ferreteria';

// Función para establecer la conexión a MongoDB.
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log('Conexión a MongoDB establecida correctamente');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);

    // Propagamos el error para evitar iniciar el servidor sin conexión.
    throw error;
  }
};

// Exportamos la función para utilizarla desde index.js.
export default connectDB;
