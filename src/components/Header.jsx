// import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../fwtw-logo.png";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuDrawer from "./MenuDrawer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="App-logo" alt="logo" width="10%" />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            From Wood to Wow
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Handcrafted, wow-worthy pieces for your home and yard.
          </Typography>
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar>
      <MenuDrawer open={menuOpen} setOpen={setMenuOpen} />
    </Box>
  );
};

export default Header;
