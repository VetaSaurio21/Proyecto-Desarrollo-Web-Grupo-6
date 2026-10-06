function Beneficio({ icono, titulo, descripcion }) {
  return (
    <div className="beneficio">
      <span className="icono-beneficio" aria-hidden="true">
        {icono}
      </span>

      <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}

export default Beneficio