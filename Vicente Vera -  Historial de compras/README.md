# Historial de Compras · Ferretería El Constructor

Módulo **"Mis compras"** del Sistema de Ventas On-line de la Ferretería El Constructor (Caso 6, ramo Desarrollo Web y Móvil).
Es la migración a **React + Tailwind CSS** de la página `historial.html` entregada en la Solemne 1 (HTML, CSS y JavaScript puro).

El cliente puede revisar sus **pedidos** y sus **cotizaciones**, buscarlos por número o producto, filtrarlos por estado y año, y abrir el detalle de cada uno con sus productos, cantidades, precios y total.

Autor: Vicente Vera Pereira · Ingeniería Civil Informática, Universidad Andrés Bello.

## Tecnologías

- React 19 (componentes, props, `useState` y eventos)
- Vite (servidor de desarrollo y compilación)
- Tailwind CSS 4 (estilos y diseño responsivo)
- React Router (navegación entre páginas)

## Requisitos

- Node.js 20.19 o superior (recomendado Node 22)
- npm (viene incluido con Node.js)

## Instalación y ejecución

```bash
# 1. Entrar a la carpeta del proyecto
cd historial-compras

# 2. Instalar las dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abrir en el navegador la dirección que muestra la terminal (normalmente http://localhost:5173).
La raíz redirige automáticamente a `/historial`.

Para generar la versión de producción:

```bash
npm run build     # crea la carpeta dist/
npm run preview   # sirve la versión compilada para probarla
```

## Estructura del proyecto

```
historial-compras/
├── index.html              Página base (fuentes y título)
├── package.json            Dependencias y scripts
├── vite.config.js          Configuración de Vite + React + Tailwind
├── public/favicon.png      Ícono de la pestaña
└── src/
    ├── main.jsx            Punto de entrada de React
    ├── App.jsx             Rutas de la aplicación
    ├── index.css           Tailwind y colores de la ferretería
    ├── assets/logo.png
    ├── components/         Piezas reutilizables de la interfaz
    │   ├── Header.jsx          Logo y menú (con menú desplegable en celular)
    │   ├── Footer.jsx          Pie de página
    │   ├── ResumenCard.jsx     Tarjeta con un dato destacado
    │   ├── Pestanas.jsx        Pestañas Pedidos / Cotizaciones
    │   ├── Filtros.jsx         Búsqueda, estado, año y limpiar filtros
    │   ├── TablaRegistros.jsx  Tabla (computador) o tarjetas (celular y tablet)
    │   ├── TarjetaRegistro.jsx Un pedido o cotización en formato tarjeta
    │   ├── EstadoBadge.jsx     Etiqueta de color según el estado
    │   └── ModalDetalle.jsx    Ventana con el detalle de productos y total
    ├── pages/
    │   ├── Historial.jsx       Página principal del módulo
    │   └── PaginaPendiente.jsx Espacio reservado para páginas de otros integrantes
    ├── data/                Datos de prueba
    │   ├── pedidos.js
    │   ├── cotizaciones.js
    │   ├── estados.js
    │   └── cliente.js
    └── utils/formato.js     Formato de precios y fechas, cálculo de totales
```

## Funcionalidades

| Funcionalidad | Cómo se implementa |
| --- | --- |
| Cambiar entre Pedidos y Cotizaciones | Estado `pestanaActiva` y evento `onClick` en `Pestanas` |
| Buscar por número o producto | Estado `busqueda` con evento `onChange` (filtra mientras se escribe) |
| Filtrar por estado y por año | Estados `estado` y `anio` en `<select>` controlados |
| Limpiar filtros | Botón que vuelve los tres filtros a su valor inicial |
| Contador "Mostrando X de Y" y mensaje sin resultados | Se calcula a partir de la lista filtrada |
| Ver detalle | Estado `registroSeleccionado`; abre `ModalDetalle` (se cierra con el botón o haciendo clic fuera) |
| Menú en celular | Estado `menuAbierto` en `Header` |
| Totales | Se calculan sumando cantidad x precio de cada producto |

## Reutilización con props

- `TablaRegistros`, `TarjetaRegistro`, `Filtros` y `ModalDetalle` se usan **igual para pedidos y cotizaciones**; solo cambian las props (títulos de columnas, opciones de estado, texto de búsqueda).
- `ResumenCard` se usa tres veces con distintos `icono`, `titulo`, `valor` y `detalle`.
- `EstadoBadge` se usa en la tabla, en las tarjetas y en el detalle.
- `PaginaPendiente` recibe el `titulo` de la sección.

## Diseño responsivo

| Pantalla | Comportamiento |
| --- | --- |
| Celular (menos de 768 px) | Menú ☰ desplegable, filtros uno bajo otro, registros como tarjetas en una columna |
| Tablet (768 px a 1023 px) | Menú horizontal, resumen en 3 columnas, tarjetas en dos columnas |
| Computador (1024 px o más) | Tabla completa con todas las columnas |

## Relación con el caso

- Fidelización de clientes: historial de compras del cliente registrado.
- RF4: el cliente puede revisar sus cotizaciones, su vigencia y su estado.
- Requerimiento no funcional: aplicación web responsive para escritorio, tablet y teléfono.

## Usuario de prueba

Los datos son de prueba y corresponden al cliente **Juan Pérez**. Cuando exista el backend, `src/data/` se reemplazará por llamadas a la API.
