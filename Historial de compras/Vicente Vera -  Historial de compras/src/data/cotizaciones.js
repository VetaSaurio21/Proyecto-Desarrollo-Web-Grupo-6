// Cotizaciones del cliente. "vigencia" es la fecha hasta la que es válida.
export const cotizaciones = [
  {
    id: "COT-0044",
    fecha: "2026-08-25",
    vigencia: "2026-09-25",
    estado: "pendiente",
    productos: [
      { nombre: "Perfil metalcon", cantidad: 40, precio: 3490 },
      { nombre: "Tornillos para volcanita (caja)", cantidad: 4, precio: 5990 },
      { nombre: "Plancha de volcanita 15 mm", cantidad: 20, precio: 8957 },
    ],
  },
  {
    id: "COT-0039",
    fecha: "2026-08-10",
    vigencia: "2026-09-10",
    estado: "aprobada",
    productos: [
      { nombre: "Cerámica 60x60 (m²)", cantidad: 25, precio: 6290 },
      { nombre: "Adhesivo cerámico 25 kg", cantidad: 5, precio: 4990 },
      { nombre: "Fragüe", cantidad: 5, precio: 1450 },
    ],
  },
  {
    id: "COT-0031",
    fecha: "2026-07-02",
    vigencia: "2026-08-02",
    estado: "vencida",
    productos: [
      { nombre: "Andamio modular (cuerpo)", cantidad: 4, precio: 89990 },
      { nombre: "Tablón de andamio", cantidad: 12, precio: 9995 },
      { nombre: "Red de protección", cantidad: 2, precio: 18000 },
    ],
  },
  {
    id: "COT-0027",
    fecha: "2026-05-19",
    vigencia: "2026-06-19",
    estado: "aprobada",
    productos: [
      { nombre: "Pintura esmalte 1 galón", cantidad: 5, precio: 34990 },
      { nombre: "Brocha 3\"", cantidad: 6, precio: 4990 },
      { nombre: "Lija (paquete)", cantidad: 10, precio: 2141 },
    ],
  },
]
