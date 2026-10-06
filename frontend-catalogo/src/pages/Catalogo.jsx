import Header from '../components/Header.jsx'
import ProductoCard from '../components/ProductoCard.jsx'
import productos from '../data/productos.js'

function Catalogo() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <section className="mx-auto max-w-7xl px-6 py-10">
          <h1 className="text-center text-3xl font-bold uppercase text-[#0f2747]">
            Catálogo de Productos
          </h1>

          <p className="mt-3 text-center text-slate-600">
            Encuentra herramientas, materiales y productos para tus proyectos.
          </p>

            <div className="mt-8 grid grid-cols-4 gap-4">
                <div>
                    <label
                        htmlFor="categoria"
                        className="mb-2 block font-semibold text-[#0f2747]"
                    >
                        Categoría
                    </label>

                    <select
                        id="categoria"
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 outline-none"
                    >
                        <option value="">Todas</option>
                        <option value="herramientas">Herramientas</option>
                        <option value="pinturas">Pinturas</option>
                        <option value="electricidad">Electricidad</option>
                        <option value="construccion">Construcción</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="marca"
                        className="mb-2 block font-semibold text-[#0f2747]"
                    >
                        Marca
                    </label>

                    <select
                        id="marca"
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 outline-none"
                    >
                        <option value="">Todas</option>
                        <option value="bosch">Bosch</option>
                        <option value="stanley">Stanley</option>
                        <option value="ceresita">Ceresita</option>
                        <option value="makita">Makita</option>
                        <option value="philips">Philips</option>
                        <option value="melón">Melón</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="precio"
                        className="mb-2 block font-semibold text-[#0f2747]"
                    >
                        Precio
                    </label>

                    <select
                        id="precio"
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 outline-none"
                    >
                        <option value="">Todos</option>
                        <option value="bajo">Hasta $20.000</option>
                        <option value="medio">$20.001 - $50.000</option>
                        <option value="alto">Más de $50.000</option>
                    </select>
                </div>
            
                <div>
                    <label
                        htmlFor="disponibilidad"
                        className="mb-2 block font-semibold text-[#0f2747]"
                    >
                        Disponibilidad
                    </label>

                    <select
                        id="disponibilidad"
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 outline-none"
                    >
                        <option value="">Todas</option>
                        <option value="disponible">Disponible</option>
                        <option value="agotado">Agotado</option>
                    </select>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
                {productos.map((producto) => (
                    <ProductoCard
                        key={producto.id}
                        nombre={producto.nombre}
                        imagen={producto.imagen}
                        categoria={producto.categoria}
                        marca={producto.marca}
                        descripcion={producto.descripcion}
                        precio={producto.precio}
                        disponibilidad={producto.disponibilidad}
                    />
                ))}

            </div>

        </section>
      </main>
    </>
  )
}

export default Catalogo