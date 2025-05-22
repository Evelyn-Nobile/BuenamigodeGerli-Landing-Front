import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 10,
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6 },
        borderRadius: "24px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fcffff",
        border: "3px solid #e0f2e9",
        boxShadow: "0 8px 32px rgba(27, 141, 75, 0.08)",

        "&:before": {
          content: '""',
          position: "absolute",
          top: -50,
          right: -50,
          width: "200px",
          height: "200px",
          backgroundImage: "url('/assets/logo.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          transform: "rotate(15deg)",
        },
      }}
    >
      <Box position="relative" zIndex={1}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.8rem",
              lg: "3rem",
            },
          }}
        >
          Reunamos a las mascotas con sus familias
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            maxWidth: "700px",
            mx: "auto",
            mb: 4,
            fontFamily: "'Alexandria', sans-serif",
            fontWeight: 400,
            color: "#333",
            fontSize: {
              xs: "1rem",
              sm: "1.05rem",
              md: "1.1rem",
            },
            px: { xs: 2, sm: 0 },
          }}
        >
          Cada reporte cuenta. Ayúdanos a reunir a estos compañeros con sus
          familias a través del código de identificación en su medalla.
        </Typography>

        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
            position: "relative",
            px: { xs: 0, sm: 2 },
          }}
        >
         <TextField
  fullWidth
  variant="outlined"
  placeholder={
    isMobile
      ? "Buscar por ID o nombre"
      : "Buscar por identificación o nombre de la mascota"
  }
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon sx={{ color: "#FFA500" }} />
      </InputAdornment>
    ),
    sx: {
      borderRadius: "50px",
      backgroundColor: "#fff",
      fontFamily: "'Alexandria', sans-serif",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      "& fieldset": { border: "none" },
      height: { xs: "48px", sm: "56px" },
      fontSize: { xs: "0.8rem", sm: "1.1rem" },
    },
  }}
/>
<Button
  variant="contained"
  sx={{
   
    display: isMobile ? "block" : "inline-block",
    position: isMobile ? "static" : "absolute",
    margin: isMobile ? "16px auto 0" : 0,
    right: isMobile ? "auto" : 4,
    top: isMobile ? "auto" : 4,
    borderRadius: "40px",
    px: 2,
    height: { xs: "48px", sm: "50px" },
    width: { xs: "90px", sm: "120px" },
    fontSize: { xs: "0.8rem", sm: "1rem" },
    background: "#1B8D4B",
  }}
>
  Buscar
</Button>

        </Box>
      </Box>
    </Box>
  );
};
