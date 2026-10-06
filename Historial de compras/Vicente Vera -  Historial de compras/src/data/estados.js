// Texto y colores de cada estado. Lo usan el filtro y la etiqueta de estado.
export const estadosPedido = [
  { valor: "entregado", texto: "Entregado" },
  { valor: "preparacion", texto: "En preparación" },
  { valor: "pendiente", texto: "Pendiente de pago" },
]

export const estadosCotizacion = [
  { valor: "pendiente", texto: "Pendiente" },
  { valor: "aprobada", texto: "Aprobada" },
  { valor: "vencida", texto: "Vencida" },
]

export const coloresEstado = {
  entregado: "bg-green-100 text-green-800",
  aprobada: "bg-green-100 text-green-800",
  preparacion: "bg-blue-100 text-blue-800",
  pendiente: "bg-amber-100 text-amber-800",
  vencida: "bg-red-100 text-red-800",
}
