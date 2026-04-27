import ProductCard from "./ProductCard.jsx";
import sampleProductList from "../sampleProductList.json";

const ProductList = () => {
  const products = sampleProductList;
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          // thumbnail={product.thumbnail}
        />
      ))}
    </>
  );
};

export default ProductList;
