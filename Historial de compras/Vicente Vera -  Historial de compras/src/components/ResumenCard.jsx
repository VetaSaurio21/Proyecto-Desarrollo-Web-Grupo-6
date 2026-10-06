// Tarjeta pequeña con un dato destacado. Se reutiliza 3 veces con distintas props.
function ResumenCard({ titulo, valor, detalle, icono }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border-l-4 border-dorado bg-white p-5 shadow-md">
      <span className="text-3xl" aria-hidden="true">
        {icono}
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          {titulo}
        </p>
        <p className="font-titulo text-2xl font-bold text-marino">{valor}</p>
        <p className="text-sm text-gray-500">{detalle}</p>
      </div>
    </div>
  )
}

export default ResumenCard
