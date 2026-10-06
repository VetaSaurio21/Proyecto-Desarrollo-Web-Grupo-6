import Beneficio from './Beneficio.jsx'

function Beneficios() {
  return (
    <section className="columna-ferreteria" id="beneficio">
      <div className="contenido-ferreteria">
        <h2>
          TODO PARA
          <br />
          <span>TUS PROYECTOS</span>
        </h2>

        <p className="texto-derecha">
          Herramientas, materiales y mucho más en un solo lugar.
        </p>

        <Beneficio
          icono="🚚"
          titulo="Compra online"
          descripcion="Fácil y rápido"
        />

        <Beneficio
          icono="📋"
          titulo="Cotiza tus proyectos"
          descripcion="Sin complicaciones"
        />

        <Beneficio
          icono="📦"
          titulo="Revisa tus pedidos"
          descripcion="En todo momento"
        />

        <p className="frase-ferreteria">
          Construye tus ideas con nosotros
        </p>
      </div>
    </section>
  )
}

export default Beneficios