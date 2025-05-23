import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  Avatar,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PetsIcon from '@mui/icons-material/Pets';




export default function NavListDrawer({ onClose }) {
  const theme = useTheme();
  const location = useLocation();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  const menuItems = [
    {
      to: "/",
      text: "Inicio",
      onClick: handleLinkClick,
    },
    { 
      to: "/quienes-somos", 
      text: "Acerca de Nosotros", 
      onClick: handleLinkClick 
    },
    {
      to: "/informacion-importante",
      text: "Información importante",
      onClick: handleLinkClick,
    },
  ];

  return (
    <Box
      sx={{
        width: isTablet ? 500 : 350,
        backgroundColor: "#fcffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Franja superior con logo y título */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#fcffff",
          borderBottom: "2px solid #e0f2e9",
        }}
      >
        <Avatar
          src="/assets/logo.webp"
          alt="Buen Amigo de Gerli"
          sx={{
            width: 60,
            height: 60,
            marginRight: "1rem",
          }}
        />
        <Typography
          sx={{
            color: "#1B8D4B",
            fontWeight: "bold",
            fontSize: "20px",
            fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
          }}
        >
          Buen Amigo de Gerli
        </Typography>
        <Avatar
          src="/assets/siluetas.webp"
          alt="Icono"
          sx={{
            width: 30,
            height: 30,
            marginLeft: "0.5rem",
          }}
        />
      </Box>

      {/* Menú de navegación */}
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
        <List>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={item.onClick}
                  sx={{
                    padding: "0.75rem 1rem",
                    "&:hover": { 
                      backgroundColor: "rgba(27, 141, 75, 0.1)" 
                    },
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            color: isActive(item.to) ? "#1B8D4B" : "#0D0D0D",
                            fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
                            fontSize: "17px",
                            fontWeight: isActive(item.to) ? 600 : 400,
                          }}
                        >
                          {item.text}
                        </Typography>
                      }
                    />
                    {isActive(item.to) && (



  <PetsIcon sx={{ 
    fontSize: "16px",
    color: "#FFA500",
    WebkitTapHighlightColor: "transparent"
  }} />
)}
                  </Stack>
                </ListItemButton>
              </ListItem>
              {index < menuItems.length - 1 && (
                <Divider 
                  sx={{ 
                    borderColor: "#e0f2e9",
                    margin: "0.5rem 0" 
                  }} 
                />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}

NavListDrawer.propTypes = {
  onClose: PropTypes.func,
};