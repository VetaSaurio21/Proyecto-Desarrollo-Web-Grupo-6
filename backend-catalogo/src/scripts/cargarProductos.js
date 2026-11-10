import mongoose from 'mongoose';

import connectDB from '../db.js';
import Producto from '../models/producto.js';

// Importamos los datos iniciales incluidos en nuestro backend.
import productos from '../data/productosIniciales.js';

// Función para realizar la carga inicial de productos.
const cargarProductos = async () => {
  try {
    // Establecemos la conexión con MongoDB.
    await connectDB();

    // Aseguramos que estén creados los índices del modelo.
    await Producto.init();

    // Preparamos una operación por cada producto.
    const operaciones = productos.map((producto) => ({
      updateOne: {
        filter: { id: producto.id },
        update: { $setOnInsert: producto },
        upsert: true
      }
    }));

    // Ejecutamos las operaciones en MongoDB.
    const resultado = await Producto.bulkWrite(operaciones);

    console.log(`Productos nuevos insertados: ${resultado.upsertedCount}`);
    console.log(`Productos que ya existían: ${resultado.matchedCount}`);
    console.log('Carga inicial finalizada correctamente');

  } catch (error) {
    // Mostramos el error para poder diagnosticarlo.
    console.error('Error al cargar los productos:', error.message);
    process.exitCode = 1;

  } finally {
    // Cerramos la conexión al finalizar.
    await mongoose.disconnect();
  }
};

// Ejecutamos la carga inicial.
cargarProductos();
