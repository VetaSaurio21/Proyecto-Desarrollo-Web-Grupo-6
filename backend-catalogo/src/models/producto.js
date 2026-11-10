import mongoose from 'mongoose';

// Definimos la estructura que tendrá cada producto en MongoDB.
const productoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },

  nombre: {
    type: String,
    required: true,
    trim: true
  },

  imagen: {
    type: String,
    required: true
  },

  categoria: {
    type: String,
    required: true,
    trim: true
  },

  marca: {
    type: String,
    required: true,
    trim: true
  },

  descripcion: {
    type: String,
    required: true,
    trim: true
  },

  precio: {
    type: Number,
    required: true,
    min: 0
  },

  disponibilidad: {
    type: String,
    required: true,
    enum: ['Disponible', 'Agotado']
  }
});

// Creamos el modelo asociado a la colección "productos".
const Producto = mongoose.model('Producto', productoSchema, 'productos');

// Exportamos el modelo para utilizarlo en los controladores.
export default Producto;
