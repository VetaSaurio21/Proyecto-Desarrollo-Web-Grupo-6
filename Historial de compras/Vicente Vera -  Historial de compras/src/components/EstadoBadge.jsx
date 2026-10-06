import { coloresEstado } from "../data/estados"

// Etiqueta de color para el estado. "texto" es lo que se lee, "estado" define el color.
function EstadoBadge({ estado, texto }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${coloresEstado[estado]}`}
    >
      {texto}
    </span>
  )
}

export default EstadoBadge
