import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Historial from "./pages/Historial"
import PaginaPendiente from "./pages/PaginaPendiente"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Al entrar a la raíz se muestra directamente el historial */}
        <Route path="/" element={<Navigate to="/historial" />} />
        <Route path="/historial" element={<Historial />} />

        {/* Páginas de mis compañeros: quedan como espacio reservado */}
        <Route path="/catalogo" element={<PaginaPendiente titulo="Catálogo" />} />
        <Route path="/mi-cuenta" element={<PaginaPendiente titulo="Mi cuenta" />} />
        <Route path="*" element={<PaginaPendiente titulo="Página no encontrada" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
