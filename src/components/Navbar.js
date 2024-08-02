import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Box, Menu, MenuItem, useMediaQuery, useTheme, IconButton } from "@mui/material";
import {  useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("celulares");

  useEffect(() => {
    const path = location.pathname.split("/")[1] || "home";
    setSelected(path);
  }, [location.pathname]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (text) => {
    if (text.toLowerCase().replace(/ /g, "-") === "celulares") {
      setSelected("celulares");
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ mr: 2, color: "#0347B6" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  maxHeight: 400,
                  width: 'auto',
                },
              }}
            >
              {["Home", "Celulares", "Motocicletas", "Tus Préstamos", "Tiendas", "Tracking", "Club Macropay"].map((text) => (
                <MenuItem
                  key={text}
                  onClick={handleMenuClose}
                  selected={text.toLowerCase().replace(/ /g, "-") === selected}
                  sx={{
                    color: text.toLowerCase().replace(/ /g, "-") === selected ? "blue" : "black",
                    bgcolor: text.toLowerCase().replace(/ /g, "-") === selected ? "yellow" : "transparent",
                    fontWeight: "bold",
                  }}
                >
                  {text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2, color: "black", marginLeft: -2 }}>
            {["Home", "Celulares", "Motocicletas", "Tus Préstamos", "Tiendas", "Tracking", "Club Macropay"].map((text) => (
              <Button
                key={text}
                disabled={text.toLowerCase().replace(/ /g, "-") !== "celulares"}
                sx={{
                  textTransform: "none",
                  color: text.toLowerCase().replace(/ /g, "-") === "celulares" ? "blue" : "black",
                  fontWeight: "bold",
                  position: "relative",
                  "&::after": {
                    content: text.toLowerCase().replace(/ /g, "-") === "celulares" ? '""' : 'none',
                    display: "block",
                    width: "25%",
                    height: "3px",
                    backgroundColor: "#FFD300",
                    position: "absolute",
                    bottom: "5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }}
                onClick={() => handleButtonClick(text)}
              >
                {text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
