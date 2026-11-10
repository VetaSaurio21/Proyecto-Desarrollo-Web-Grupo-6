
import Pedido from "../models/pedido.js"

// GENERAR PEDIDO
export const generarPedido = async (req, res) => {
  try {
    const { cliente, productos } = req.body

    if (!cliente?.nombre || !cliente?.rut) {
      return res.status(400).json({
        mensaje: "Debes proporcionar los datos del cliente"
      })
    }

    if (!Array.isArray(productos) || productos.length === 0) {
      return res.status(400).json({
        mensaje: "El pedido debe contener productos"
      })
    }

    let total = 0

    const productosPedido = productos.map(producto => {
      const precio = Number(producto.precio)
      const cantidad = Number(producto.cantidad)

      if (
        !producto.nombre ||
        !Number.isFinite(precio) ||
        precio < 0 ||
        !Number.isInteger(cantidad) ||
        cantidad < 1
      ) {
        throw new Error("Producto, precio o cantidad inválidos")
      }

      const subtotal = precio * cantidad
      total += subtotal

      return {
        productoId: String(producto.productoId || ""),
        nombre: producto.nombre,
        precio,
        cantidad,
        subtotal
      }
    })

    const nuevoPedido = new Pedido({
      cliente,
      productos: productosPedido,
      total
    })

    await nuevoPedido.save()

    return res.status(201).json({
      mensaje: "Pedido generado correctamente",
      pedido: nuevoPedido
    })

  } catch (error) {
    return res.status(400).json({
      mensaje: error.message
    })
  }
}

// CONSULTAR TODOS LOS PEDIDOS
export const mostrarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find()

    return res.status(200).json(pedidos)

  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al consultar pedidos",
      error: error.message
    })
  }
}

// CONSULTAR UN PEDIDO
export const mostrarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
      return res.status(404).json({
        mensaje: "Pedido no encontrado"
      })
    }

    return res.status(200).json(pedido)

  } catch (error) {
    return res.status(400).json({
      mensaje: "No se pudo consultar el pedido",
      error: error.message
    })
  }
}
