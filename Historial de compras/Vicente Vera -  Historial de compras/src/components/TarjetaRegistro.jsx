import EstadoBadge from "./EstadoBadge"
import { formatearFecha, formatearPrecio } from "../utils/formato"

// Versión en tarjeta de una fila de la tabla (se usa en celular y tablet)
function TarjetaRegistro({ registro, tituloExtra, onVerDetalle }) {
  return (
    <article className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-titulo text-lg font-semibold text-marino">
            {registro.id}
          </h3>
          <p className="text-sm text-gray-500">{formatearFecha(registro.fecha)}</p>
        </div>
        <EstadoBadge estado={registro.estado} texto={registro.textoEstado} />
      </div>

      <p className="mt-3 text-sm text-gray-700">{registro.resumen}</p>
      <p className="mb-4 mt-1 text-sm text-gray-500">
        {tituloExtra}: <span className="font-semibold text-gray-700">{registro.extra}</span>
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
        <p className="font-titulo text-xl font-bold">{formatearPrecio(registro.total)}</p>
        <button
          type="button"
          onClick={() => onVerDetalle(registro)}
          className="rounded-md bg-dorado px-4 py-2 text-sm font-bold text-marino transition-colors hover:bg-marino-claro hover:text-white"
        >
          Ver detalle
        </button>
      </div>
    </article>
  )
}

export default TarjetaRegistro
