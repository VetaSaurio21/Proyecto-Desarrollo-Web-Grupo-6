import mongoose from "mongoose"

const pedidoEsquema = new mongoose.Schema({
  cliente: {
    nombre: {
      type: String,
      required: true
    },
    rut: {
      type: String,
      required: true
    }
  },

  productos: [
    {
      productoId: String,
      nombre: {
        type: String,
        required: true
      },
      precio: {
        type: Number,
        required: true
      },
      cantidad: {
        type: Number,
        required: true
      },
      subtotal: {
        type: Number,
        required: true
      }
    }
  ],

  total: {
    type: Number,
    required: true
  },

  estado: {
    type: String,
    default: "Pendiente"
  },

  fecha: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model("Pedido", pedidoEsquema)