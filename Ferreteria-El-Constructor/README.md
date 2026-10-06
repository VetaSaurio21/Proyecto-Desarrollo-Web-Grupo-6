# Ferretería El Constructor · Módulo de Compra

Módulo **"Ferretería El Constructor"** desarrollado para el Sistema de Ventas On-line de la Ferretería El Constructor, correspondiente al proyecto de Desarrollo Web y Móvil.

El módulo presenta una tienda web donde el cliente puede **visualizar herramientas, consultar sus precios y descripciones, agregar productos al carrito, modificar cantidades, eliminar productos y realizar el proceso de compra**.

Además, cuenta con una sección de contacto y una interfaz adaptada para facilitar la navegación y el proceso de compra.

## Tecnologías

- React (componentes y manejo de estados)
- Vite (servidor de desarrollo y compilación)
- JavaScript
- HTML
- CSS

## Requisitos

- Node.js
- npm (incluido con Node.js)

## Instalación y ejecución

```bash
# 1. Entrar a la carpeta del proyecto
cd Ferreteria-El-Constructor

# 2. Instalar las dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev

Luego abrir en el navegador la dirección que muestra la terminal, normalmente:
http://localhost:5173

Para generar la versión de producción:
npm run build

Para visualizar la versión compilada:
npm run preview

Estructura del proyecto
Ferreteria-El-Constructor/
├── index.html                  Página base de la aplicación
├── package.json                Dependencias y scripts del proyecto
├── vite.config.js              Configuración de Vite
├── public/
│   └── images/                 Imágenes de los productos
└── src/
    ├── main.jsx                Punto de entrada de React
    ├── App.jsx                 Componente principal y lógica de la aplicación
    ├── App.css                 Estilos principales de la aplicación
    ├── index.css               Estilos generales
    └── components/
        ├── Header.jsx          Encabezado y navegación
        ├── Footer.jsx          Pie de página
        ├── Products.jsx        Sección donde se muestran los productos
        └── ProductCard.jsx     Tarjeta individual de cada producto

Funcionalidades
| **Funcionalidad** | **Cómo se implementa** |
| --- | --- |
| Visualización de productos | Los productos se almacenan en `App.jsx` y se muestran mediante `Products` y `ProductCard` |
| Agregar al carrito | El botón de cada producto ejecuta la función `addToCart` |
| Aumentar cantidad | El botón `+` incrementa la cantidad del producto seleccionado |
| Disminuir cantidad | El botón `−` reduce la cantidad y elimina el producto cuando llega a cero |
| Eliminar producto | El botón `Eliminar` remueve el producto del carrito |
| Vaciar carrito | El botón `Vaciar carrito` elimina todos los productos |
| Cálculo del total | El total se obtiene multiplicando el precio por la cantidad de cada producto |
| Contador del carrito | Se muestra la cantidad total de productos agregados |
| Resumen de compra | Se muestran los productos, cantidades y total antes de confirmar |
| Finalizar compra | El cliente completa sus datos mediante un formulario |
| Validación del formulario | Se validan los campos obligatorios antes de confirmar la compra |
| Confirmación de compra | Después de completar el formulario se muestra un mensaje de compra realizada |
| Sección de contacto | El cliente puede visualizar los datos de contacto |
| Navegación | El menú permite desplazarse entre las diferentes secciones de la página |

Componentes de React

Header
Componente encargado del encabezado y navegación principal del sitio. También muestra el acceso al carrito junto con la cantidad de productos agregados.
Products
Componente encargado de recibir la lista de productos y generar las tarjetas correspondientes.
ProductCard
Componente reutilizable utilizado para mostrar cada producto de manera individual. Recibe la información del producto y permite agregarlo al carrito.
Footer
Componente encargado del pie de página de la aplicación.
Manejo del carrito
El carrito se administra mediante el estado de React:
