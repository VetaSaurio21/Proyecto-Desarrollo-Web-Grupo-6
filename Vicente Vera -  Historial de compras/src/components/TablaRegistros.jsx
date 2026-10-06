import EstadoBadge from "./EstadoBadge"
import TarjetaRegistro from "./TarjetaRegistro"
import { formatearFecha, formatearPrecio } from "../utils/formato"

// Muestra pedidos o cotizaciones. En computador se ve como tabla;
// en celular y tablet cada registro se muestra como tarjeta para que nada se desborde.
function TablaRegistros({ registros, tituloId, tituloExtra, onVerDetalle }) {
  if (registros.length === 0) {
    return (
      <div className="rounded-lg bg-gray-50 py-12 text-center text-gray-500">
        <p className="text-4xl" aria-hidden="true">🔍</p>
        <p className="mt-2 font-semibold">
          No hay registros que coincidan con la búsqueda.
        </p>
        <p className="text-sm">Prueba con otro texto o limpia los filtros.</p>
      </div>
    )
  }

  return (
    <>
      {/* Tabla: computador */}
      <div className="hidden overflow-x-auto rounded-lg border border-gray-200 lg:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-marino-claro text-white">
            <tr>
              <th className="px-4 py-3">{tituloId}</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Productos</th>
              <th className="px-4 py-3">{tituloExtra}</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3 text-right">Total</th>
              <th className="px-4 py-3">
                <span className="sr-only">Detalle</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {registros.map((registro) => (
              <tr key={registro.id} className="hover:bg-amber-50/60">
                <td className="px-4 py-3 font-bold text-marino">{registro.id}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  {formatearFecha(registro.fecha)}
                </td>
                <td className="px-4 py-3 text-gray-600">{registro.resumen}</td>
                <td className="px-4 py-3">{registro.extra}</td>
                <td className="px-4 py-3">
                  <EstadoBadge estado={registro.estado} texto={registro.textoEstado} />
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-right font-bold">
                  {formatearPrecio(registro.total)}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => onVerDetalle(registro)}
                    className="whitespace-nowrap rounded-md bg-dorado px-3 py-1.5 text-xs font-bold text-marino transition-colors hover:bg-marino-claro hover:text-white"
                  >
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tarjetas: celular (una columna) y tablet (dos columnas) */}
      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {registros.map((registro) => (
          <TarjetaRegistro
            key={registro.id}
            registro={registro}
            tituloExtra={tituloExtra}
            onVerDetalle={onVerDetalle}
          />
        ))}
      </div>
    </>
  )
}

export default TablaRegistros
