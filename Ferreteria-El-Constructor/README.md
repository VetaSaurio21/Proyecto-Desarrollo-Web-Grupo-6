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

- ## Instalación y ejecución
Para ejecutar el proyecto localmente:

- ##Estructura del proyecto
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

 - ## Funcionalidades
Visualización de productos: Los productos se almacenan en App.jsx y se muestran mediante los componentes Products y ProductCard.
Agregar al carrito: Cada producto cuenta con un botón que permite agregarlo al carrito.
Aumentar cantidad: El botón + incrementa la cantidad del producto seleccionado.
Disminuir cantidad: El botón − reduce la cantidad y elimina el producto cuando llega a cero.
Eliminar producto: Permite remover un producto específico del carrito.
Vaciar carrito: Permite eliminar todos los productos agregados.
Cálculo del total: El sistema calcula automáticamente el precio total considerando el precio y la cantidad de cada producto.
Contador del carrito: Muestra la cantidad total de productos agregados.
Resumen de compra: Permite revisar los productos, cantidades y total antes de confirmar.
Finalizar compra: El cliente puede ingresar sus datos mediante un formulario.
Validación del formulario: Se validan los campos obligatorios antes de confirmar la compra.
Confirmación de compra: Después de completar correctamente el formulario se muestra un mensaje de compra realizada.
Sección de contacto: Permite visualizar la información de contacto de la ferretería.
Navegación: El menú permite desplazarse entre las diferentes secciones de la página.

- ## Componentes de React

- Header
Componente encargado del encabezado y navegación principal del sitio. También muestra el acceso al carrito junto con la cantidad de productos agregados.
Products
Componente encargado de recibir la lista de productos y generar las tarjetas correspondientes.
ProductCard
Componente reutilizable utilizado para mostrar cada producto de manera individual. Recibe la información del producto y permite agregarlo al carrito.
Footer
Componente encargado del pie de página de la aplicación.
Manejo del carrito
El carrito se administra mediante el estado de React:

Relación con el proyecto
El módulo representa la sección de tienda y compra de productos de la Ferretería El Constructor.
Su objetivo es permitir que el cliente pueda recorrer el catálogo de herramientas, seleccionar los productos que necesita y completar un flujo básico de compra mediante una interfaz desarrollada en React.
Datos de prueba
Los productos, precios, descripciones e imágenes utilizados actualmente corresponden a datos de prueba definidos dentro de la aplicación.
En una implementación futura, estos datos podrían ser reemplazados por información obtenida desde un backend o una API.
Autor
Omar Hernández Rangel
Proyecto de Desarrollo Web y Móvil
Universidad Andrés Bello 
