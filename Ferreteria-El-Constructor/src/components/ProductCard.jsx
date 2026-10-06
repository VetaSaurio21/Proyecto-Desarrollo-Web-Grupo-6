function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    console.log("Agregando al carrito:", product.name);
    addToCart(product);
  };

  return (
    <article className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-content">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">

          <span className="product-price">
            ${product.price.toLocaleString("es-CL")}
          </span>

          <button
            type="button"
            className="add-button"
            onClick={handleAddToCart}
          >
            🛒 Agregar al carrito
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;