import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ResumenCard from "../components/ResumenCard"
import Pestanas from "../components/Pestanas"
import Filtros from "../components/Filtros"
import TablaRegistros from "../components/TablaRegistros"
import ModalDetalle from "../components/ModalDetalle"
import { pedidos } from "../data/pedidos"
import { cotizaciones } from "../data/cotizaciones"
import { estadosPedido, estadosCotizacion } from "../data/estados"
import { cliente } from "../data/cliente"
import {
  calcularTotal,
  formatearFecha,
  formatearPrecio,
  resumirProductos,
} from "../utils/formato"

// Busca el texto que se muestra para un estado ("preparacion" -> "En preparación")
function textoDelEstado(listaEstados, valor) {
  return listaEstados.find((e) => e.valor === valor).texto
}

// Pedidos y cotizaciones quedan con la misma forma para usar los mismos componentes
const listaPedidos = pedidos.map((pedido) => ({
  ...pedido,
  extra: pedido.entrega,
  textoEstado: textoDelEstado(estadosPedido, pedido.estado),
  total: calcularTotal(pedido.productos),
  resumen: resumirProductos(pedido.productos),
  aviso:
    pedido.estado === "pendiente"
      ? "Este pedido aún no registra pago. Puedes pagarlo en tienda o contactar a un vendedor."
      : null,
}))

const avisosCotizacion = {
  pendiente: "Un vendedor está revisando esta cotización. Te avisaremos por correo cuando tenga respuesta.",
  vencida: "Esta cotización ya no está vigente. Solicita una nueva para actualizar precios y stock.",
}

const listaCotizaciones = cotizaciones.map((cotizacion) => ({
  ...cotizacion,
  extra: formatearFecha(cotizacion.vigencia),
  textoEstado: textoDelEstado(estadosCotizacion, cotizacion.estado),
  total: calcularTotal(cotizacion.productos),
  resumen: resumirProductos(cotizacion.productos),
  aviso: avisosCotizacion[cotizacion.estado] || null,
}))

// Lo que cambia entre una pestaña y la otra
const configuracion = {
  pedidos: {
    registros: listaPedidos,
    tituloId: "N° Pedido",
    tituloExtra: "Entrega",
    opcionesEstado: estadosPedido,
    placeholder: "N° de pedido o producto",
  },
  cotizaciones: {
    registros: listaCotizaciones,
    tituloId: "N° Cotización",
    tituloExtra: "Válida hasta",
    opcionesEstado: estadosCotizacion,
    placeholder: "N° de cotización o producto",
  },
}

// Años que aparecen en una lista, del más reciente al más antiguo
function obtenerAnios(registros) {
  const anios = registros.map((r) => r.fecha.slice(0, 4))
  return [...new Set(anios)].sort().reverse()
}

// Datos para las tarjetas de resumen
const totalComprado = listaPedidos
  .filter((p) => p.estado !== "pendiente")
  .reduce((suma, p) => suma + p.total, 0)
const pedidosEntregados = listaPedidos.filter((p) => p.estado === "entregado").length
const cotizacionesPendientes = listaCotizaciones.filter((c) => c.estado === "pendiente").length

// Página

function Historial() {
  const [pestanaActiva, setPestanaActiva] = useState("pedidos")
  const [busqueda, setBusqueda] = useState("")
  const [estado, setEstado] = useState("todos")
  const [anio, setAnio] = useState("todos")
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null)

  const actual = configuracion[pestanaActiva]

  function limpiarFiltros() {
    setBusqueda("")
    setEstado("todos")
    setAnio("todos")
  }

  function cambiarPestana(id) {
    setPestanaActiva(id)
    limpiarFiltros() // los estados de pedidos y cotizaciones son distintos
  }

  // Se filtra en cada render a partir del estado: no hace falta tocar el DOM
  const texto = busqueda.trim().toLowerCase()

  const registrosFiltrados = actual.registros.filter((registro) => {
    const coincideTexto =
      registro.id.toLowerCase().includes(texto) ||
      registro.productos.some((p) => p.nombre.toLowerCase().includes(texto))
    const coincideEstado = estado === "todos" || registro.estado === estado
    const coincideAnio = anio === "todos" || registro.fecha.startsWith(anio)

    return coincideTexto && coincideEstado && coincideAnio
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:py-10">
        {/* Título */}
        <section className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-dorado-oscuro">
            Mi cuenta
          </p>
          <h1 className="font-titulo text-3xl font-bold text-marino sm:text-4xl">
            Historial de compras
          </h1>
          <p className="mt-2 text-gray-600">
            Revisa los pedidos y las cotizaciones que has realizado, {cliente.nombre}.
          </p>
        </section>

        {/* Resumen */}
        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <ResumenCard
            icono="📦"
            titulo="Pedidos realizados"
            valor={listaPedidos.length}
            detalle={`${pedidosEntregados} entregados`}
          />
          <ResumenCard
            icono="🧾"
            titulo="Total comprado"
            valor={formatearPrecio(totalComprado)}
            detalle="En pedidos pagados"
          />
          <ResumenCard
            icono="📋"
            titulo="Cotizaciones pendientes"
            valor={cotizacionesPendientes}
            detalle="Esperando respuesta"
          />
        </section>

        {/* Pedidos / cotizaciones */}
        <section>
          <Pestanas
            pestanas={[
              { id: "pedidos", texto: "Pedidos", cantidad: listaPedidos.length },
              { id: "cotizaciones", texto: "Cotizaciones", cantidad: listaCotizaciones.length },
            ]}
            activa={pestanaActiva}
            onCambiar={cambiarPestana}
          />

          <div className="space-y-6 rounded-b-xl rounded-tr-xl bg-white p-4 shadow-md sm:p-6">
            <Filtros
              textoBusqueda={busqueda}
              placeholder={actual.placeholder}
              estado={estado}
              anio={anio}
              opcionesEstado={actual.opcionesEstado}
              opcionesAnio={obtenerAnios(actual.registros)}
              onBuscar={setBusqueda}
              onCambiarEstado={setEstado}
              onCambiarAnio={setAnio}
              onLimpiar={limpiarFiltros}
            />

            <p className="text-sm text-gray-500">
              Mostrando {registrosFiltrados.length} de {actual.registros.length}
            </p>

            <TablaRegistros
              registros={registrosFiltrados}
              tituloId={actual.tituloId}
              tituloExtra={actual.tituloExtra}
              onVerDetalle={setRegistroSeleccionado}
            />
          </div>
        </section>
      </main>

      <Footer />

      {/* La ventana de detalle solo existe mientras hay un registro elegido */}
      {registroSeleccionado && (
        <ModalDetalle
          registro={registroSeleccionado}
          tituloExtra={actual.tituloExtra}
          onCerrar={() => setRegistroSeleccionado(null)}
        />
      )}
    </div>
  )
}

export default Historial
