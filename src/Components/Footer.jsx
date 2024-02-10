// Footer.js
import React from "react";
import { Box } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: "#2C3E50",
      padding: "30px",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: 999,
    }}
  >
    {/* You can add content here if needed */}
  </Box>
);

export default Footer;