import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
  Drawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1B8D4B",
      },
    },
    typography: {
      fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
      fontSize: 17,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fcffff",
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderBottom: "2px solid #e0f2e9",
          zIndex: 1200,
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "0.3rem",
            paddingBottom: "0.3rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            margin: "0 auto",
            width: "98%",
            maxWidth: "100%",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="/assets/logo.webp"
              alt={"Buen Amigo de Gerli"}
              style={{
                width: "60px",
                height: "60px",
                cursor: "pointer",
              }}
            />
          </Link>

          {/* Navegación en desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "5rem",
              alignItems: "center",
              flexGrow: 1,
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          >
            <List sx={{ display: "flex", gap: "3rem" }}>
              <ListItemButton
                component={Link}
                to="/"
                sx={{
                  padding: 0,
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemText
                    primary={"Inicio"}
                    sx={{
                      color: isActive("/") ? "#1B8D4B" : "#0D0D0D",
                    }}
                  />
                  {isActive("/") && (
                    <Box
                      component="span"
                      sx={{
                        marginLeft: "8px",
                        fontSize: "16px",
                        color: "#FFA500",
                      }}
                    >
                      🐾
                    </Box>
                  )}
                </Box>
              </ListItemButton>
            </List>

            <List sx={{ display: "flex", gap: "3rem" }}>
              <ListItemButton
                component={Link}
                to="/quienes-somos"
                sx={{
                  padding: 0,
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemText
                    primary={"Acerca de Nosotros"}
                    sx={{
                      color: isActive("/quienes-somos") ? "#1B8D4B" : "#0D0D0D",
                    }}
                  />
                  {isActive("/quienes-somos") && (
                    <Box
                      component="span"
                      sx={{
                        marginLeft: "8px",
                        fontSize: "16px",
                        color: "#FFA500",
                      }}
                    >
                      🐾
                    </Box>
                  )}
                </Box>
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/informacion-importante"
                sx={{
                  padding: 0,
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <ListItemText
                    primary={"Información importante"}
                    sx={{
                      color: isActive("/informacion-importante")
                        ? "#1B8D4B"
                        : "#0D0D0D",
                    }}
                  />
                  {isActive("/informacion-importante") && (
                    <Box
                      component="span"
                      sx={{
                        marginLeft: "8px",
                        fontSize: "16px",
                        color: "#FFA500",
                      }}
                    >
                      🐾
                    </Box>
                  )}
                </Box>
              </ListItemButton>
            </List>
          </Box>

          <Box
            sx={{
              gap: "1rem",
              alignItems: "center",
              flexGrow: 0.25,
              justifyContent: "flex-end",
              display: { xs: "block", sm: "flex" },
            }}
          >
            <IconButton
              onClick={() => setOpen(true)}
              edge="start"
              color="#1B8D4B"
              aria-label="menu"
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Typography
              sx={{
                color: "#1B8D4B",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Buen Amigo de Gerli
            </Typography>
            <img
              src="/assets/siluetas.webp"
              alt="Icono"
              style={{
                width: "30px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer onClose={() => setOpen(false)} />
      </Drawer>
    </ThemeProvider>
  );
}
