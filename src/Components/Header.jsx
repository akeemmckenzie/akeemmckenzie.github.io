import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => (
  <AppBar position="sticky" sx={{ zIndex: 999, backgroundColor: "#2C3E50" }}>
    <Toolbar>
      <Typography variant="h6">Akeem McKenzie</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link to="/Home" sx={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit" sx={{ color: "white" }}>
            Home
          </Button>{" "}
          {/* Override color to white */}
        </Link>
        <Button
          color="inherit"
          onClick={() =>
            window.open("/react-portfolio/Akeem_McKenzie_Resume_Feb_2024.pdf", "_blank")
          }
        >
          Resume
        </Button>
        <Link to="/projects" sx={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit" sx={{ color: "white" }}>
            Projects
          </Button>{" "}
          {/* Override color to white */}
        </Link>
        <Link to="/contact" sx={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit" sx={{ color: "white" }}>
            Contact
          </Button>{" "}
          {/* Override color to white */}
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
