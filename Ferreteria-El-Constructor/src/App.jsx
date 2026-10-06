import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  // Método de entrega seleccionado
  const [deliveryMethod, setDeliveryMethod] = useState("store");

  // Mensaje de contacto enviado
  const [contactSent, setContactSent] = useState(false);

  // =========================
  // PRODUCTOS
  // =========================

  const products = [
    {
      id: 1,
      name: "Martillo",
      description: "Martillo de acero profesional.",
      price: 8990,
      image: "/images/martillo.jpg.png",
    },
    {
      id: 2,
      name: "Taladro",
      description: "Taladro eléctrico de alta potencia.",
      price: 39990,
      image: "/images/taladro.jpg.png",
    },
    {
      id: 3,
      name: "Destornillador",
      description: "Juego de destornilladores profesionales.",
      price: 12990,
      image: "/images/destornillador.jpg.png",
    },
    {
      id: 4,
      name: "Llave inglesa",
      description: "Llave inglesa ajustable de acero.",
      price: 10990,
      image: "/images/llave-inglesa.jpg.png",
    },
    {
      id: 5,
      name: "Cinta métrica",
      description: "Cinta métrica profesional de 5 metros.",
      price: 5990,
      image: "/images/cinta-metrica.jpg.png",
    },
    {
      id: 6,
      name: "Sierra manual",
      description: "Sierra manual para trabajos de madera.",
      price: 14990,
      image: "/images/sierra-manual.jpg.png",
    },
  ];

  // =========================
  // CARRITO
  // =========================

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // =========================
  // TOTALES
  // =========================

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /*
    ENVÍO:

    Retiro en tienda:
    - Siempre gratis.

    Despacho a domicilio:
    - Gratis desde $50.000.
    - $3.990 si es menor a $50.000.
  */

  const shippingCost =
  cart.length === 0
    ? 0
    : deliveryMethod === "store"
    ? 0
    : subtotal + 3990 >= 50000
    ? 0
    : 3990;

  const totalPrice = subtotal + shippingCost;

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-CL")}`;
  };

  // =========================
  // CONFIRMAR COMPRA
  // =========================

  const handleConfirmPurchase = (event) => {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    setPurchaseConfirmed(true);
    clearCart();

    window.location.hash = "inicio";
  };

  // =========================
  // FORMULARIO DE CONTACTO
  // =========================

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setContactSent(true);
    form.reset();
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <Header cartCount={cartCount} />

      <main>

        {/* ================= HERO ================= */}

        <section id="inicio" className="hero">
          <div className="hero-content">

            <span className="hero-icon">
              🔨
            </span>

            <h1>
              Ferretería El Constructor
            </h1>

            <p>
              Todo lo que necesitas para tus proyectos.
            </p>

            <a
              href="#productos"
              className="hero-button"
            >
              Ver productos
            </a>

          </div>
        </section>

        {/* ================= BIENVENIDA ================= */}

        <section className="welcome">

          <h2>
            Bienvenido a nuestra ferretería
          </h2>

          <p>
            Encuentra herramientas, materiales y productos
            para todos tus proyectos.
          </p>

        </section>

        {/* ================= PRODUCTOS ================= */}

        <Products
          products={products}
          addToCart={addToCart}
        />

        {/* ================= CARRITO ================= */}

        <section
          id="carrito"
          className="cart-section"
        >

          <div className="cart-page">

            <div className="cart-page-header">

              <div>

                <h2>
                  <span className="cart-title-icon">
                    🛒
                  </span>

                  Tu carrito de compras
                </h2>

                <p>
                  Revisa tus productos antes de finalizar tu compra.
                </p>

              </div>

              <a
                href="#productos"
                className="continue-shopping"
              >
                ← Seguir comprando
              </a>

            </div>

            <div className="cart-layout">

              {/* ================= CARRITO IZQUIERDA ================= */}

              <div className="cart-main">

                {cart.length === 0 ? (

                  <div className="empty-cart">

                    <div className="empty-cart-icon">
                      🛒
                    </div>

                    <h3>
                      Tu carrito está vacío
                    </h3>

                    <p>
                      Agrega algunos productos para comenzar tu compra.
                    </p>

                    <a
                      href="#productos"
                      className="hero-button"
                    >
                      Ver productos
                    </a>

                  </div>

                ) : (

                  <>

                    <div className="cart-table-header">

                      <span>
                        PRODUCTO
                      </span>

                      <span>
                        PRECIO UNITARIO
                      </span>

                      <span>
                        CANTIDAD
                      </span>

                      <span>
                        SUBTOTAL
                      </span>

                      <span></span>

                    </div>

                    <div className="cart-products">

                      {cart.map((item) => (

                        <div
                          className="cart-item"
                          key={item.id}
                        >

                          <div className="cart-product">

                            <div className="cart-item-image">

                              <img
                                src={item.image}
                                alt={item.name}
                              />

                            </div>

                            <div className="cart-item-info">

                              <h3>
                                {item.name}
                              </h3>

                              <p>
                                {item.description}
                              </p>

                            </div>

                          </div>

                          <div className="cart-unit-price">
                            {formatPrice(item.price)}
                          </div>

                          <div className="quantity-controls">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                            >
                              −
                            </button>

                            <span>
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                            >
                              +
                            </button>

                          </div>

                          <div className="cart-item-total">

                            {formatPrice(
                              item.price * item.quantity
                            )}

                          </div>

                          <button
                            type="button"
                            className="remove-button"
                            onClick={() =>
                              removeFromCart(item.id)
                            }
                            title="Eliminar producto"
                          >
                            🗑️
                          </button>

                        </div>

                      ))}

                    </div>

                    <div className="shipping-notice">

                      <span>
                        🚚
                      </span>

                      <strong>
                        Envío gratis
                      </strong>

                      <span>
                        en compras mayores a $50.000
                      </span>

                    </div>

                    <div className="cart-bottom">

                      <button
                        type="button"
                        className="clear-cart-button"
                        onClick={clearCart}
                      >
                        🗑️ Vaciar carrito
                      </button>

                      <span>
                        {cartCount}{" "}
                        {cartCount === 1
                          ? "producto"
                          : "productos"}{" "}
                        en tu carrito
                      </span>

                    </div>

                  </>

                )}

              </div>

              {/* ================= RESUMEN DERECHA ================= */}

              <aside className="cart-summary">

                <div className="summary-title">

                  <span>
                    📋
                  </span>

                  <h3>
                    Resumen del pedido
                  </h3>

                </div>

                <div className="summary-row">

                  <span>
                    Subtotal ({cartCount}{" "}
                    {cartCount === 1
                      ? "producto"
                      : "productos"})
                  </span>

                  <strong>
                    {formatPrice(subtotal)}
                  </strong>

                </div>

                <div className="summary-row">

                  <span>
                    Descuento
                  </span>

                  <strong>
                    $0
                  </strong>

                </div>

                <div className="summary-row">

                  <span>
                    Envío
                  </span>

                  <strong
                    className={
                      shippingCost === 0
                        ? "free-shipping"
                        : "shipping-cost"
                    }
                  >
                    {shippingCost === 0
                      ? "Gratis"
                      : formatPrice(shippingCost)}
                  </strong>

                </div>

                <div className="summary-divider"></div>

                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    {formatPrice(totalPrice)}
                  </strong>

                </div>

                <a
                  href="#checkout"
                  className={`checkout-button ${
                    cart.length === 0
                      ? "disabled-button"
                      : ""
                  }`}
                  onClick={(event) => {

                    if (cart.length === 0) {

                      event.preventDefault();

                      alert(
                        "Agrega productos al carrito antes de continuar."
                      );

                    }

                  }}
                >
                  🔒 Finalizar compra

                  <span>
                    →
                  </span>

                </a>

                {/* DESCUENTO */}

                <div className="discount-box">

                  <h4>
                    🏷️ Código de descuento
                  </h4>

                  <div className="discount-input">

                    <input
                      type="text"
                      placeholder="Ingresa tu código"
                    />

                    <button type="button">
                      Aplicar
                    </button>

                  </div>

                </div>

                {/* MÉTODO DE ENTREGA */}

                <div className="delivery-box">

                  <h4>
                    🚚 Método de entrega
                  </h4>

                  <div className="delivery-options">

                    {/* RETIRO EN TIENDA */}

                    <button
                      type="button"
                      className={`delivery-option ${
                        deliveryMethod === "store"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setDeliveryMethod("store")
                      }
                    >

                      <span className="delivery-radio">
                        {deliveryMethod === "store"
                          ? "●"
                          : "○"}
                      </span>

                      <span className="delivery-icon">
                        🏪
                      </span>

                      <strong>
                        Retiro en tienda
                      </strong>

                      <small>
                        Gratis
                      </small>

                    </button>

                    {/* DESPACHO A DOMICILIO */}

                    <button
                      type="button"
                      className={`delivery-option ${
                        deliveryMethod === "home"
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setDeliveryMethod("home")
                      }
                    >

                      <span className="delivery-radio">
                        {deliveryMethod === "home"
                          ? "●"
                          : "○"}
                      </span>

                      <span className="delivery-icon">
                        🚚
                      </span>

                      <strong>
                        Despacho a domicilio
                      </strong>

                      <small>
                        {subtotal >= 50000
                          ? "Gratis"
                          : "Desde $3.990"}
                      </small>

                    </button>

                  </div>

                </div>

                {/* COMPRA SEGURA */}

                <div className="secure-payment">

                  <span className="secure-icon">
                    🛡️
                  </span>

                  <div>

                    <strong>
                      Compra 100% segura
                    </strong>

                    <p>
                      Tus datos están protegidos.
                    </p>

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </section>

        {/* ================= CHECKOUT ================= */}

        <section
          id="checkout"
          className="checkout-section"
        >

          {purchaseConfirmed ? (

            <div className="purchase-confirmed">

              <div className="success-icon">
                🎉
              </div>

              <h2>
                ¡Compra realizada con éxito!
              </h2>

              <p>
                Gracias por tu compra en{" "}
                <strong>
                  Ferretería El Constructor
                </strong>.
              </p>

              <p>
                Tu pedido ha sido registrado correctamente.
              </p>

              <button
               type="button"
              className="buy-button"
              onClick={() => {
               setPurchaseConfirmed(false);
               setDeliveryMethod("store");
             window.location.hash = "productos";
                  }}
                   >
                🛍️ Seguir comprando
             </button>

            </div>

          ) : (

            <div className="checkout-container">

              <div className="checkout-header">

                <span>
                  🛍️
                </span>

                <h2>
                  Finalizar compra
                </h2>

                <p>
                  Completa tus datos para realizar tu pedido.
                </p>

              </div>

              <div className="checkout-content">

                <form
                  className="checkout-form"
                  onSubmit={handleConfirmPurchase}
                >

                  <h3>
                    Datos del cliente
                  </h3>

                  <label>
                    Nombre completo
                  </label>

                  <input
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    required
                  />

                  <label>
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />

                  <label>
                    Teléfono
                  </label>

                  <input
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    required
                  />

                  <label>
                    Dirección de entrega
                  </label>

                  <input
                    type="text"
                    placeholder="Calle, número, comuna"
                    required
                  />

                  <label>
                    Método de pago
                  </label>

                  <select required>

                    <option value="">
                      Selecciona un método
                    </option>

                    <option value="tarjeta">
                      💳 Tarjeta de crédito/débito
                    </option>

                    <option value="transferencia">
                      🏦 Transferencia bancaria
                    </option>

                  </select>

                  <button
                    type="submit"
                    className="confirm-button"
                  >
                    ✅ Confirmar compra
                  </button>

                </form>

                <div className="checkout-summary">

                  <h3>
                    Resumen del pedido
                  </h3>

                  {cart.length === 0 ? (

                    <div className="checkout-empty">

                      <p>
                        No hay productos en el carrito.
                      </p>

                      <a href="#productos">
                        Ver productos
                      </a>

                    </div>

                  ) : (

                    <>

                      {cart.map((item) => (

                        <div
                          className="checkout-product"
                          key={item.id}
                        >

                          <div>

                            <strong>
                              {item.name}
                            </strong>

                            <p>
                              Cantidad: {item.quantity}
                            </p>

                          </div>

                          <strong>
                            {formatPrice(
                              item.price * item.quantity
                            )}
                          </strong>

                        </div>

                      ))}

                      <div className="checkout-total">

                        <span>
                          Total
                        </span>

                        <strong>
                          {formatPrice(totalPrice)}
                        </strong>

                      </div>

                    </>

                  )}

                </div>

              </div>

            </div>

          )}

        </section>

        {/* ================= CONTACTO ================= */}

        <section
          id="contacto"
          className="contact-section"
        >

          <div className="contact-container">

            <div className="contact-info">

              <h2>
                Contáctanos
              </h2>

              <p>
                ¿Tienes alguna pregunta? Escríbenos
                y estaremos encantados de ayudarte.
              </p>

              <div className="contact-data">

                <p>
                  📍 Santiago, Chile
                </p>

                <p>
                  📞 +56 9 1234 5678
                </p>

                <p>
                  ✉️ contacto@elconstructor.cl
                </p>

              </div>

            </div>

            {/* FORMULARIO DE CONTACTO */}

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
            >

              <label>
                Nombre
              </label>

              <input
                type="text"
                placeholder="Escribe tu nombre"
                required
              />

              <label>
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="correo@ejemplo.com"
                required
              />

              <label>
                Mensaje
              </label>

              <textarea
                placeholder="Escribe tu mensaje..."
                rows="5"
                required
              ></textarea>

              <button type="submit">
                📩 Enviar mensaje
              </button>

              {contactSent && (
                <div className="contact-success">
                  ✅ ¡Mensaje enviado correctamente!
                  <br />
                  Gracias por contactarnos.
                </div>
              )}

            </form>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;