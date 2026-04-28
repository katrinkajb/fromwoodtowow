const ProductCard = ({ title, price, image }) => (
  <div className="border border-gray-200 rounded-lg p-4 m-2">
    <div className="text-center border-b border-gray-200">
      <h1>{title}</h1>
      <div>{price}</div>
      <img
        src={image}
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  </div>
);

export default ProductCard;
