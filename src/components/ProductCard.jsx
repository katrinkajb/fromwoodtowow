import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ProductCard({ id, title, price, mainImage }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Box
        className="green"
        sx={{
          textAlign: "center",
          border: "1px solid #a42e2e",
          padding: "16px",
        }}
        onClick={() => handleNavigation(`/product/${id}`)}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{price}</Typography>
        <img
          src={mainImage}
          alt={title}
          style={{ width: "100px", height: "100px" }}
        />
      </Box>
    </div>
  );
}
