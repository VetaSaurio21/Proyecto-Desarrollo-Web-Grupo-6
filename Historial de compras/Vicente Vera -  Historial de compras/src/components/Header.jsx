import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const enlaces = [
  { ruta: "/catalogo", texto: "Catálogo" },
  { ruta: "/historial", texto: "Mis compras" },
  { ruta: "/mi-cuenta", texto: "Mi cuenta" },
]

function Header() {
  // En celular el menú parte cerrado y se abre con el botón ☰
  const [menuAbierto, setMenuAbierto] = useState(false)

  // NavLink avisa si el enlace es la página actual (isActive) para destacarlo
  const claseEnlace = ({ isActive }) =>
    `block px-4 py-2 rounded-md font-semibold transition-colors ${
      isActive
        ? "bg-dorado text-marino"
        : "text-white hover:text-dorado"
    }`

  return (
    <header className="bg-marino shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/historial">
          <img
            src={logo}
            alt="Logo Ferretería El Constructor"
            className="w-44 sm:w-56"
          />
        </NavLink>

        {/* Botón que solo aparece en pantallas pequeñas */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="rounded-md border border-white/30 px-3 py-1 text-2xl text-white md:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* Menú de escritorio */}
        <nav className="hidden md:block">
          <ul className="flex gap-2">
            {enlaces.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink to={enlace.ruta} className={claseEnlace}>
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menú desplegable de celular */}
      {menuAbierto && (
        <nav className="border-t border-white/10 bg-marino-claro md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {enlaces.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink
                  to={enlace.ruta}
                  className={claseEnlace}
                  onClick={() => setMenuAbierto(false)}
                >
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
