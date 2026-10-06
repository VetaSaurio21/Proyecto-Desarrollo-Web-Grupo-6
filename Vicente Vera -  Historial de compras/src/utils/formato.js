// Convierte 86950 en "$86.950"
export function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CL")
}

// Convierte "2026-08-28" en "28-08-2026"
export function formatearFecha(fecha) {
  const [anio, mes, dia] = fecha.split("-")
  return `${dia}-${mes}-${anio}`
}

// Suma cantidad x precio de todos los productos
export function calcularTotal(productos) {
  return productos.reduce((suma, p) => suma + p.cantidad * p.precio, 0)
}

// Resume los productos en una línea: "Taladro, Brocas y 1 más"
export function resumirProductos(productos) {
  const nombres = productos.map((p) => p.nombre)
  if (nombres.length <= 2) return nombres.join(", ")
  return `${nombres[0]}, ${nombres[1]} y ${nombres.length - 2} más`
}
