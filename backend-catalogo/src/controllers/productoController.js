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

