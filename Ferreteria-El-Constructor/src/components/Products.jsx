import ProductCard from "./ProductCard";

function Products({ products, addToCart }) {
  return (
    <section id="productos" className="products-section">

      <div className="products-header">
        <span className="products-icon">🛠️</span>

        <h2>Nuestros productos</h2>

        <p>
          Encuentra las mejores herramientas para tus proyectos.
        </p>
      </div>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </section>
  );
}

export default Products;