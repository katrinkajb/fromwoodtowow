import ProductCard from "./ProductCard.jsx";
import productList from "../productList.json";
import { Grid } from "@mui/material";

export default function ProductList() {
  const products = productList;

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
}
