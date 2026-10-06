import EstadoBadge from "./EstadoBadge"
import { formatearFecha, formatearPrecio } from "../utils/formato"

// Ventana con el detalle de un pedido o cotización.
function ModalDetalle({ registro, tituloExtra, onCerrar }) {
  return (
    // Hacer clic en el fondo oscuro cierra la ventana
    <div
      onClick={onCerrar}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
    >
      <div
        // El clic dentro de la ventana no debe cerrarla
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-detalle"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 bg-marino px-6 py-4 text-white">
          <div>
            <p className="text-sm text-white/70">Detalle</p>
            <h2 id="titulo-detalle" className="font-titulo text-2xl font-semibold">
              {registro.id}
            </h2>
          </div>
          <button
            type="button"
            onClick={onCerrar}
            className="rounded-md px-2 text-2xl leading-none text-white/80 hover:text-dorado"
            aria-label="Cerrar detalle"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5 p-6">
          <dl className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-gray-500">Fecha</dt>
              <dd className="font-semibold">{formatearFecha(registro.fecha)}</dd>
            </div>
            <div>
              <dt className="text-gray-500">{tituloExtra}</dt>
              <dd className="font-semibold">{registro.extra}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Estado</dt>
              <dd>
                <EstadoBadge estado={registro.estado} texto={registro.textoEstado} />
              </dd>
            </div>
          </dl>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-dorado text-left">
                <th className="py-2">Producto</th>
                <th className="py-2 text-center">Cant.</th>
                <th className="hidden py-2 text-right sm:table-cell">Precio unit.</th>
                <th className="py-2 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {registro.productos.map((producto) => (
                <tr key={producto.nombre}>
                  <td className="py-2 pr-2">{producto.nombre}</td>
                  <td className="py-2 text-center">{producto.cantidad}</td>
                  <td className="hidden py-2 text-right sm:table-cell">
                    {formatearPrecio(producto.precio)}
                  </td>
                  <td className="py-2 text-right">
                    {formatearPrecio(producto.cantidad * producto.precio)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3">
            <span className="font-semibold">Total</span>
            <span className="font-titulo text-2xl font-bold text-marino">
              {formatearPrecio(registro.total)}
            </span>
          </div>

          {registro.aviso && (
            <p className="rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              {registro.aviso}
            </p>
          )}

          <button
            type="button"
            onClick={onCerrar}
            className="w-full rounded-md bg-marino-claro py-3 font-bold text-white transition-colors hover:bg-marino"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDetalle
