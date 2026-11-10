import Producto from '../models/producto.js';

// Controlador para obtener todos los productos.
export const obtenerProductos = async (req, res) => {
  try {
    
    // Obtenemos el parámetro categoria enviado en la URL.
    const { categoria } = req.query;

    // Preparamos el filtro para consultar MongoDB.
    const filtro = {};

    // Si recibimos una categoría, la agregamos al filtro.
    if (typeof categoria === 'string' && categoria.trim() !== '') {
      filtro.categoria = categoria.trim();
    }

    // Consultamos los productos que coincidan con el filtro.
    const productos = await Producto.find(filtro);

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
