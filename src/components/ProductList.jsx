import ProductCard from "./ProductCard.jsx";
import sampleProductList from "../sampleProductList.json";

const ProductList = () => {
  const products = sampleProductList;
  return (
    <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
        data-test="product-list-container"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
