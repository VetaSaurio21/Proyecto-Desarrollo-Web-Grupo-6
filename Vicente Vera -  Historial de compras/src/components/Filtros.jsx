// Barra de filtros. Los valores viven en la página (Historial) y llegan por props,
// así este mismo componente sirve para pedidos y para cotizaciones.
function Filtros({
  textoBusqueda,
  placeholder,
  estado,
  anio,
  opcionesEstado,
  opcionesAnio,
  onBuscar,
  onCambiarEstado,
  onCambiarAnio,
  onLimpiar,
}) {
  const claseCampo =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-dorado-oscuro focus:outline-none focus:ring-2 focus:ring-dorado/40"

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] lg:items-end">
      <div className="sm:col-span-2 lg:col-span-1">
        <label htmlFor="busqueda" className="mb-1 block text-sm font-bold">
          Buscar
        </label>
        <input
          id="busqueda"
          type="search"
          value={textoBusqueda}
          onChange={(e) => onBuscar(e.target.value)}
          placeholder={placeholder}
          className={claseCampo}
        />
      </div>

      <div>
        <label htmlFor="estado" className="mb-1 block text-sm font-bold">
          Estado
        </label>
        <select
          id="estado"
          value={estado}
          onChange={(e) => onCambiarEstado(e.target.value)}
          className={claseCampo}
        >
          <option value="todos">Todos</option>
          {opcionesEstado.map((opcion) => (
            <option key={opcion.valor} value={opcion.valor}>
              {opcion.texto}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="anio" className="mb-1 block text-sm font-bold">
          Año
        </label>
        <select
          id="anio"
          value={anio}
          onChange={(e) => onCambiarAnio(e.target.value)}
          className={claseCampo}
        >
          <option value="todos">Todos</option>
          {opcionesAnio.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={onLimpiar}
        className="rounded-md bg-dorado px-4 py-2 text-sm font-bold text-marino transition-colors hover:bg-marino-claro hover:text-white sm:col-span-2 lg:col-span-1"
      >
        Limpiar filtros
      </button>
    </div>
  )
}

export default Filtros
