import { ImageList, ImageListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProductDetail = ({
  title,
  price,
  mainImage,
  description,
  photoArray,
}) => (
  <div>
    <Box
      sx={{ textAlign: "center", border: "1px solid #ccc", padding: "16px" }}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{price}</Typography>
      <Typography variant="body2">{description}</Typography>
      <img
        src={mainImage}
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {photoArray.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </div>
);

export default ProductDetail;
