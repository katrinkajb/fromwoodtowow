import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ title, price, mainImage }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  <div>
    <Box
      sx={{ textAlign: "center", border: "1px solid #ccc", padding: "16px" }}
      onClick={() => handleNavigation("/custom")}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{price}</Typography>
      <img
        src={mainImage}
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
    </Box>
  </div>;
}
