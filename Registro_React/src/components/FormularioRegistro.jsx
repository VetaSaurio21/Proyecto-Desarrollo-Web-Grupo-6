import { useState } from 'react'

function FormularioRegistro() {
  const [mensaje, setMensaje] = useState('')

    function registrar(evento) {
    evento.preventDefault()

    const datos = new FormData(evento.currentTarget)
    const nombre = datos.get('nombre').trim()
    const rut = datos.get('rut').trim().toUpperCase()
    const password = datos.get('password')
    const confirmarPassword = datos.get('confirmarPassword')

    const formatoRut = /^[0-9]{7,8}-[0-9K]$/

    if (nombre === '') {
      setMensaje('Escribe tu nombre completo.')
      return
    }

    if (!formatoRut.test(rut)) {
      setMensaje('Escribe el RUT sin puntos y con guion. Ej: 12345678-5')
      return
    }

    if (password.length < 5) {
      setMensaje('La contraseña debe tener al menos 5 caracteres.')
      return
    }

    if (password !== confirmarPassword) {
      setMensaje('Las contraseñas no coinciden.')
      return
    }

    setMensaje(`Datos de ${nombre} validados correctamente.`)
  }
  return (
    <form onSubmit={registrar}>
      <label htmlFor="nombre">Nombre completo</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Escribe tu nombre completo"
        required
      />

      <label htmlFor="rut" translate="no">RUT</label>
      <input
        id="rut"
        name="rut"
        type="text"
        placeholder="Ej: 12345678-9"
        required
      />

      <label htmlFor="correo">Correo electrónico</label>
      <input
        id="correo"
        name="correo"
        type="email"
        placeholder="Ej: nombre@correo.cl"
        required
      />

      <label htmlFor="telefono">Teléfono (opcional)</label>
      <input
        id="telefono"
        name="telefono"
        type="tel"
        placeholder="Ej: +56 9 1234 5678"
      />

      <label htmlFor="direccion">Dirección</label>
      <input
        id="direccion"
        name="direccion"
        type="text"
        placeholder="Escribe tu dirección"
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        minLength={5}
        required
      />

      <label htmlFor="confirmarPassword">
        Confirmar contraseña
      </label>
      <input
        id="confirmarPassword"
        name="confirmarPassword"
        type="password"
        minLength={5}
        required
      />

      <button type="submit">Registrarme</button>

      {mensaje && <p role="status">{mensaje}</p>}
    </form>
  )
}

export default FormularioRegistro