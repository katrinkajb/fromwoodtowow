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
        textAlign: "center",
        marginTop: "auto",
        flexGrow: 1,
      }}
    >
      <BottomNavigation
        showLabels
        sx={{
          width: "100%",
          backgroundColor: "green",
          textAlign: "center",
          marginTop: "auto",
          flexGrow: 1,
        }}
      >
        <BottomNavigationAction
          label="Instagram"
          icon={<InstagramIcon />}
          onClick={() =>
            handleExternalLink("https://www.instagram.com/fromwoodtowow")
          }
        />
        <BottomNavigationAction
          label="Facebook"
          icon={<FacebookIcon />}
          onClick={() =>
            handleExternalLink(
              "https://www.facebook.com/profile.php?id=61579155818256",
            )
          }
        />
        <BottomNavigationAction
          label="TikTok"
          icon={<EmailIcon />} //Find icon
          onClick={() => handleExternalLink("fromwoodtowow@gmail.com")}
        />
        <BottomNavigationAction
          label="Contact Us"
          icon={<EmailIcon />}
          onClick={() => handleExternalLink("fromwoodtowow@gmail.com")}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
