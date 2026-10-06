# Registro de clientes · Ferretería El Constructor

Módulo de registro de clientes del Sistema de Ventas On-line de la Ferretería El Constructor (Caso 6). Corresponde a la migración de la página de registro desarrollada con HTML, CSS y JavaScript a una aplicación con React y Vite.

La interfaz permite completar los datos de un cliente, comprobar el formato del RUT y la coincidencia de las contraseñas, y mostrar mensajes de validación. Incluye encabezado, navegación, formulario, beneficios y pie de página.

## Tecnologías

- React 19.3.0: componentes, JSX, props, eventos y `useState`.
- Vite: servidor de desarrollo y compilación para producción.
- JavaScript: lógica de validación y lectura del formulario mediante `FormData`.
- CSS: colores, tipografía, espaciado, Grid, Flexbox y media queries.

## Requisitos

Node.js y npm instalados. El entorno utilizado para este proyecto tiene Node.js **24.21.0** y npm **11.19.0**. La compilación se ejecutó con Vite **8.3.3**.

## Instalación y ejecución

En Windows, abrir una terminal de PowerShell y ejecutar:

```powershell
cd ferreteria-registro-react
npm.cmd install
npm.cmd run dev
```

Abrir en el navegador la dirección que indique la terminal, normalmente `http://localhost:5173/`. Si el puerto está ocupado, usar la dirección que muestre Vite.

En otros sistemas se pueden ejecutar los mismos comandos utilizando `npm` en lugar de `npm.cmd`.

## Compilación y vista previa

```powershell
npm.cmd run build
npm.cmd run preview
```

El primer comando genera la versión de producción en `dist`. El segundo permite probar esa versión desde la dirección que muestra la terminal.

La compilación fue comprobada y terminó sin errores. Esto verifica que el proyecto puede compilarse; las funciones y el diseño también requieren pruebas en el navegador.

## Organización del proyecto

| Archivo o carpeta | Función |
| --- | --- |
| `index.html` | Documento base de la aplicación; idioma español y punto de montaje de React. |
| `package.json` y `package-lock.json` | Dependencias, scripts y versiones de instalación. |
| `vite.config.js` | Configuración de Vite y React. |
| `src/main.jsx` | Punto de entrada de React. |
| `src/App.jsx` | Organización de los componentes de la página. |
| `src/index.css` | Estilos generales de la aplicación. |
| `src/App.css` | Estilos de las secciones y adaptación a distintos anchos. |
| `public/img/logo.png` | Logo de la ferretería. |
| `public/img/Herramientas.png` | Imagen de fondo de la sección de beneficios. |
| `src/components/` | Componentes de la interfaz. |

## Componentes

| Componente | Responsabilidad |
| --- | --- |
| `Encabezado.jsx` | Logo y enlaces a Contacto, Registro y Beneficios. |
| `FormularioRegistro.jsx` | Campos, validaciones y mensajes al enviar el formulario. |
| `Beneficio.jsx` | Presentación de un beneficio a partir de sus props. |
| `Beneficios.jsx` | Sección informativa que reutiliza tres veces el componente `Beneficio`. |
| `PiePagina.jsx` | Dirección, teléfono y nombre de la ferretería. |

## Funcionalidades y validaciones

| Funcionalidad | Implementación |
| --- | --- |
| Datos del cliente | Campos de nombre, RUT, correo, teléfono opcional, dirección y contraseñas. |
| Campos obligatorios | Atributo `required`; el nombre también se comprueba después de quitar espacios en sus extremos. |
| Correo electrónico | Validación nativa del navegador mediante `type="email"`. |
| Formato del RUT | Expresión regular: 7 u 8 números, guion y un número o K; sin puntos. |
| Longitud de contraseña | Mínimo de 5 caracteres mediante `minLength` y una comprobación en JavaScript. |
| Confirmación de contraseña | Comparación de las dos contraseñas al enviar. |
| Mensajes | Estado `mensaje`, actualizado mediante `setMensaje`. |
| Envío sin recargar | Evento `onSubmit` y `evento.preventDefault()`. |
| Navegación interna | Enlaces a los identificadores de las secciones de la misma página. |

Los campos se leen con `FormData` al enviar el formulario. `useState` guarda el mensaje que React muestra en pantalla. No se imprimen las contraseñas en la consola.

## Props y reutilización

`Beneficio` recibe las props `icono`, `titulo` y `descripcion`. `Beneficios` lo utiliza tres veces con distintos datos para mostrar Compra online, Cotiza tus proyectos y Revisa tus pedidos.

Así se reutiliza la misma estructura de JSX sin repetir todo su código para cada beneficio.

## Diseño responsivo

| Ancho de pantalla | Comportamiento |
| --- | --- |
| Hasta 768 px | Formulario y beneficios en una sola columna. |
| Más de 768 px | Formulario y beneficios en dos columnas mediante CSS Grid. |

El logo tiene un ancho máximo adaptable, el menú permite saltos de línea y el pie de página utiliza Flexbox con `flex-wrap`.

## Pruebas manuales

Para repetir las comprobaciones, completar los demás campos obligatorios con datos de prueba:

1. Enviar con campos obligatorios vacíos: el navegador debe solicitar que se completen.
2. Escribir `hola` en el RUT: debe aparecer el mensaje de formato incorrecto.
3. Escribir `12345678-5` como RUT y contraseñas `abcde` y `abcdf`: debe aparecer el mensaje de contraseñas diferentes.
4. Usar ese RUT y escribir `abcde` en ambos campos de contraseña: debe aparecer el mensaje de datos validados.
5. Comprobar la navegación del menú y el diseño en anchos de 375, 820 y 1280 px, sin desplazamiento horizontal.

## Alcance y relación con el caso

Este trabajo desarrolla el frontend del módulo de registro de clientes del Caso 6 y presenta los beneficios de disponer de una cuenta para comprar, cotizar y revisar pedidos.

La aplicación valida los datos en el navegador, pero **no crea cuentas reales ni guarda datos en una base de datos**. No incluye backend, conexión a una API, autenticación ni historial de compras. Los enlaces del menú llevan a secciones de esta página.

La comprobación del RUT valida únicamente su formato; no calcula el dígito verificador. El mínimo de cinco caracteres de contraseña conserva la regla de la página original.

La conexión a un backend y las validaciones del servidor corresponden a una etapa posterior.

## Entrega del código fuente

Entregar el proyecto con `src`, `public`, `index.html`, `package.json`, `package-lock.json`, los archivos de configuración y este `README.md`. La carpeta `node_modules` se reconstruye con `npm.cmd install` y no es necesaria en el archivo de entrega.

La carpeta `dist` contiene la versión compilada; debe acompañarse del código fuente si se incluye en la entrega.
