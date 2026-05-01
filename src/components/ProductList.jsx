import ProductCard from "./ProductCard.jsx";
import sampleProductList from "../sampleProductList.json";
import { Grid } from "@mui/material";

const ProductList = () => {
  const products = sampleProductList;
  return (
    <Grid
      container
      spacing={4}
      columns={{ xs: 4, sm: 6, md: 8 }}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {products.map((product) => (
        <Grid key={product.id}>
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            mainImage={product.mainImage}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
