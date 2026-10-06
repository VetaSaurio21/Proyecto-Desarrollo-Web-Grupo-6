// Recibe la lista de pestañas, cuál está activa y qué hacer al hacer clic.
function Pestanas({ pestanas, activa, onCambiar }) {
  return (
    <div className="flex gap-1" role="tablist">
      {pestanas.map((pestana) => {
        const estaActiva = pestana.id === activa

        return (
          <button
            key={pestana.id}
            type="button"
            role="tab"
            aria-selected={estaActiva}
            onClick={() => onCambiar(pestana.id)}
            className={`flex items-center gap-2 rounded-t-lg px-4 py-3 font-titulo text-base tracking-wide transition-colors sm:px-6 ${
              estaActiva
                ? "bg-marino-claro text-white"
                : "bg-gray-300 text-marino-claro hover:bg-gray-400/60"
            }`}
          >
            {pestana.texto}
            <span
              className={`rounded-full px-2 text-xs font-bold ${
                estaActiva ? "bg-dorado text-marino" : "bg-white text-marino"
              }`}
            >
              {pestana.cantidad}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default Pestanas
