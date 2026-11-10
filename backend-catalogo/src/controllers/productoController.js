import Producto from '../models/producto.js';

// Controlador para obtener todos los productos.
export const obtenerProductos = async (req, res) => {
  try {
    // Obtenemos los parámetros enviados en la URL.
    const { categoria, marca, precio, disponibilidad } = req.query;

    // Construimos el filtro que utilizaremos en MongoDB.
    const filtro = {};

    // Filtro por categoría.
    if (typeof categoria === 'string' && categoria.trim() !== '') {
      filtro.categoria = categoria.trim();
    }

    // Filtro por marca.
    if (typeof marca === 'string' && marca.trim() !== '') {
      filtro.marca = marca.trim();
    }

    // Filtro por disponibilidad.
    if (typeof disponibilidad === 'string' && disponibilidad.trim() !== '') {
      const estado = disponibilidad.trim();

      if (!['Disponible', 'Agotado'].includes(estado)) {
        return res.status(400).json({
          mensaje: 'La disponibilidad debe ser Disponible o Agotado'
        });
      }

      filtro.disponibilidad = estado;
    }

    // Filtro por rango de precio.
    if (typeof precio === 'string' && precio.trim() !== '') {
      const rango = precio.trim().toLowerCase();

      if (rango === 'bajo') {
        filtro.precio = { $lte: 20000 };
      } else if (rango === 'medio') {
        filtro.precio = { $gte: 20001, $lte: 50000 };
      } else if (rango === 'alto') {
        filtro.precio = { $gt: 50000 };
      } else {
        return res.status(400).json({
          mensaje: 'El precio debe ser bajo, medio o alto'
        });
      }
    }

    // Consultamos los productos que cumplan todas las condiciones.
    const productos = await Producto.find(filtro).sort({ id: 1 });

    // Respondemos con los productos encontrados.
    return res.status(200).json(productos);

  } catch (error) {
    // Registramos el error para facilitar su diagnóstico.
    console.error('Error al obtener productos:', error.message);

    // Respondemos sin exponer detalles internos del servidor.
    return res.status(500).json({
      mensaje: 'Error interno al obtener los productos'
    });
  }
};

// Controlador para consultar un producto por su identificador.
export const obtenerProductoPorId = async (req, res) => {
  try {
    // Obtenemos el identificador enviado en la URL.
    const { id } = req.params;

    // Validamos que sea un número entero positivo.
    if (!/^[1-9]\d*$/.test(id)) {
      return res.status(400).json({
        mensaje: 'El identificador del producto debe ser un número entero positivo'
      });
    }

    // Buscamos un único producto utilizando su campo id.
    const producto = await Producto.findOne({ id: Number(id) });

    // Si no encontramos el producto, respondemos con HTTP 404.
    if (!producto) {
      return res.status(404).json({
        mensaje: 'Producto no encontrado'
      });
    }

    // Si existe, devolvemos el producto encontrado.
    return res.status(200).json(producto);

  } catch (error) {
    console.error('Error al obtener el producto:', error.message);

    return res.status(500).json({
      mensaje: 'Error interno al obtener el producto'
    });
  }
};
