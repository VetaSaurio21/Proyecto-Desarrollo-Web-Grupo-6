import Encabezado from './components/Encabezado.jsx'
import FormularioRegistro from './components/FormularioRegistro.jsx'
import Beneficios from './components/Beneficios.jsx'
import './App.css'
import PiePagina from './components/PiePagina.jsx'

function App() {
  return (
    <>
      <Encabezado />

      <main className="registro-layout">
        <section className="columna-formulario" id="registro">
          <h1>¿Aún no estás registrado?</h1>

          <p>
            Crea tu cuenta para comprar, cotizar y revisar tus pedidos.
          </p>

          <FormularioRegistro />
        </section>

        <Beneficios />
      </main>

      <PiePagina />
    </>
  )
}

export default App