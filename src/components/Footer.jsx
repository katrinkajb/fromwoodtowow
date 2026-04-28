import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const handleExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Instagram"
          icon={<InstagramIcon />}
          onClick={() => handleExternalLink("https://www.instagram.com")}
        />
        <BottomNavigationAction
          label="Facebook"
          icon={<FacebookIcon />}
          onClick={() => handleExternalLink("https://www.facebook.com")}
        />
        <BottomNavigationAction
          label="Contact Us"
          icon={<EmailIcon />}
          onClick={() => handleExternalLink("https://www.gmail.com")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
