import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

// Espacio reservado para las páginas que desarrollan otros integrantes del grupo
function PaginaPendiente({ titulo }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="text-5xl" aria-hidden="true">🚧</p>
        <h1 className="mt-4 font-titulo text-3xl font-bold text-marino">{titulo}</h1>
        <p className="mt-2 text-gray-600">Esta sección está en construcción.</p>
        <Link
          to="/historial"
          className="mt-6 rounded-md bg-dorado px-5 py-2 font-bold text-marino hover:bg-marino-claro hover:text-white"
        >
          Ir a Mis compras
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export default PaginaPendiente
