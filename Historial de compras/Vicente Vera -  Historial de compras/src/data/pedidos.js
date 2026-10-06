// Pedidos del cliente. El total de cada pedido se calcula a partir de sus productos.
export const pedidos = [
  {
    id: "FC-0187",
    fecha: "2026-08-28",
    entrega: "Despacho a domicilio",
    estado: "preparacion",
    productos: [
      { nombre: "Taladro inalámbrico 20V", cantidad: 1, precio: 64990 },
      { nombre: "Set de brocas para metal", cantidad: 1, precio: 11990 },
      { nombre: "Cinta métrica 5 m", cantidad: 1, precio: 9970 },
    ],
  },
  {
    id: "FC-0175",
    fecha: "2026-08-12",
    entrega: "Retiro en tienda",
    estado: "entregado",
    productos: [
      { nombre: "Pintura látex 4 L", cantidad: 3, precio: 29990 },
      { nombre: "Rodillo antigota", cantidad: 2, precio: 6990 },
      { nombre: "Cinta de enmascarar", cantidad: 2, precio: 3430 },
    ],
  },
  {
    id: "FC-0166",
    fecha: "2026-07-30",
    entrega: "Despacho a domicilio",
    estado: "entregado",
    productos: [
      { nombre: "Cemento gris 25 kg", cantidad: 7, precio: 6490 },
      { nombre: "Saco de arena", cantidad: 8, precio: 2900 },
    ],
  },
  {
    id: "FC-0154",
    fecha: "2026-07-05",
    entrega: "Despacho a domicilio",
    estado: "pendiente",
    productos: [
      { nombre: "Ampolleta LED 9W", cantidad: 10, precio: 1990 },
      { nombre: "Cable eléctrico 2,5 mm (rollo)", cantidad: 1, precio: 42990 },
      { nombre: "Interruptor simple", cantidad: 8, precio: 1990 },
    ],
  },
  {
    id: "FC-0141",
    fecha: "2026-06-18",
    entrega: "Retiro en tienda",
    estado: "entregado",
    productos: [
      { nombre: "Martillo carpintero", cantidad: 1, precio: 12990 },
      { nombre: "Clavos 2\" (1 kg)", cantidad: 2, precio: 3990 },
      { nombre: "Huincha aisladora", cantidad: 2, precio: 1970 },
    ],
  },
  {
    id: "FC-0092",
    fecha: "2025-12-15",
    entrega: "Despacho a domicilio",
    estado: "entregado",
    productos: [
      { nombre: "Set de destornilladores", cantidad: 1, precio: 14990 },
      { nombre: "Alicate universal", cantidad: 1, precio: 9990 },
      { nombre: "Nivel de burbuja", cantidad: 1, precio: 16980 },
    ],
  },
  {
    id: "FC-0081",
    fecha: "2025-11-08",
    entrega: "Retiro en tienda",
    estado: "entregado",
    productos: [
      { nombre: "Esmalte sintético 1 galón", cantidad: 2, precio: 27990 },
      { nombre: "Diluyente 1 L", cantidad: 2, precio: 6290 },
    ],
  },
]
