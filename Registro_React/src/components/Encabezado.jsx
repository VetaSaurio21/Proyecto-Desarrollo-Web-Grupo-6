function Encabezado() {
  return (
    <header className="barra-superior" id="inicio">
      <img
        src="/img/logo.png"
        alt="Logo Ferretería El Constructor"
        className="logo"
      />

      <nav className="menu">
        <a href="#contacto">Contacto</a>
        <a href="#registro">Registro</a>
        <a href="#beneficio">Beneficios</a>
      </nav>
    </header>
  )
}

export default Encabezado