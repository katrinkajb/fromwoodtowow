import { ImageList, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const productId = Number(params.id);

  function findProductById(id) {
    const productList = require("../productList.json");
    return productList.find((product) => product.id === id);
  }

  const product = findProductById(productId);
  const { title, price, mainImage, description, photoArray } = product;

  return (
    <div>
      <Header />
      <Box
        sx={{ textAlign: "center", border: "1px solid #ccc", padding: "16px" }}
      >
        <Typography variant="h4">{title}</Typography>
        <img
          src={mainImage}
          alt={title}
          style={{ width: "100px", height: "100px" }}
        />
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body1">{price}</Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {photoArray.map((item) => (
            <ImageListItem key={item}>
              <img
                // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                src={item}
                key={item}
                alt={title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Footer />
    </div>
  );
}
