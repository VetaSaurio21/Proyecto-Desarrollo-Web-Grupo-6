function Header({ cartCount = 0 }) {
  return (
    <header className="header">

      <div className="header-content">

        {/* LOGO */}
        <a href="#inicio" className="logo">

          <div className="logo-icon">
            🔨
          </div>

          <div className="logo-text">
            <span className="logo-name">
              EL CONSTRUCTOR
            </span>

            <span className="logo-subtitle">
              FERRETERÍA
            </span>
          </div>

        </a>

        {/* NAVEGACIÓN */}
        <nav className="nav">

          <a href="#inicio" className="nav-link">
            <span>🏠</span>
            Inicio
          </a>

          <a href="#productos" className="nav-link">
            <span>🔧</span>
            Productos
          </a>

          <a
            href="#carrito"
            className="nav-link cart-link"
          >
            <span>🛒</span>
            Carrito

            <span className="cart-badge">
              {cartCount}
            </span>
          </a>

          <a href="#contacto" className="nav-link">
            <span>📞</span>
            Contacto
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Header;