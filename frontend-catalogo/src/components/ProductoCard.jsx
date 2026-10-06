function ProductoCard({
  nombre,
  imagen,
  categoria,
  marca,
  descripcion,
  precio,
  disponibilidad,
}) {
  const precioFormateado = precio.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  })

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex h-52 items-center justify-center bg-white p-4">
        <img
          src={imagen}
          alt={nombre}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-slate-500">
          {categoria} · {marca}
        </p>

        <h2 className="mt-2 text-lg font-bold text-[#0f2747]">
          {nombre}
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          {descripcion}
        </p>

        <p className="mt-4 text-2xl font-bold text-[#0f2747]">
          {precioFormateado}
        </p>

        <p
            className={`mt-2 font-semibold ${
                disponibilidad === 'Disponible'
                    ? 'text-green-600'
                    : 'text-red-600'
    }`}
        >
            {disponibilidad}
        </p>

        <button
          type="button"
          className="mt-5 w-full rounded-md border border-[#f4c400] px-4 py-2 font-bold text-[#d49d00] transition-colors hover:bg-[#0f2747] hover:text-white"
        >
          Ver más
        </button>
      </div>
    </article>
  )
}

export default ProductoCard