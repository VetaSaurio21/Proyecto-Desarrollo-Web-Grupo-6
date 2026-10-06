function Header() {
  return (
    <header className="bg-[#0f2747] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="shrink-0">
          <img
            src="/img/logo.png"
            alt="Ferretería El Constructor"
            className="w-52 h-auto"
          />
        </div>

        <div className="mx-8 flex flex-1">
          <input
            type="search"
            placeholder="Buscar productos..."
            className="w-full rounded-l-md bg-white px-4 py-2 text-slate-800 outline-none"
          />

          <button
            type="button"
            className="rounded-r-md bg-[#f4c400] px-5 py-2 font-bold text-[#0f2747] transition-colors hover:bg-yellow-400"
          >
            Buscar
          </button>
        </div>

        <nav>
          <ul className="flex items-center gap-8 font-semibold">
            <li>
              <a
                href="#"
                className="transition-colors hover:text-[#f4c400]"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors hover:text-[#f4c400]"
              >
                Catálogo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header