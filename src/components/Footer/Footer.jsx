import {
  Box,
  IconButton,
  Typography,
  Link,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ position: "relative", bgcolor: "#fcffff", pt: 10, pb: 4 }}>
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80px",
          transform: "translateY(-100%)",
          fill: "#fcffff",
          pointerEvents: "none",
        }}
      >
        <path d="M0,64 C320,160 1120,0 1440,64 L1440,100 L0,100 Z" />
      </Box>

      {/* Redes sociales */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
     <IconButton
          aria-label="Facebook"
          href="https://www.facebook.com/profile.php?id=100010636781684"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#FFA500 !important",
            WebkitTapHighlightColor: "transparent",
            "&:active, &:focus": {
              color: "#FFA500 !important",
              backgroundColor: "transparent !important",
            },
          }}
        >
          <FacebookIcon fontSize="large" />
          <Typography
            component="span"
            sx={{
              ml: 0.5,
              fontSize: "1.5rem",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            🦴
          </Typography>
        </IconButton>

        <IconButton
          aria-label="Instagram"
          href="https://www.instagram.com/buenamigodegerli_gladys/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#1B8D4B" }}
        >
          <InstagramIcon fontSize="large" />
          <Typography component="span" sx={{ ml: 0.5, fontSize: "1.5rem" }}>
            🐶
          </Typography>
        </IconButton>

        <IconButton
          aria-label="WhatsApp"
          href="https://wa.me/5491131546827"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#FFA500" }}
        >
          <WhatsAppIcon fontSize="large" />
          <Typography component="span" sx={{ ml: 0.5, fontSize: "1.5rem" }}>
            🐱
          </Typography>
        </IconButton>
      </Box>

      {/* Información del sitio */}
      <Box sx={{ textAlign: "center", px: 2, color: "#0D0D0D" }}>
        <Typography
          variant={isSmall ? "body1" : "h6"}
          fontWeight="bold"
          gutterBottom
         
        >
          Buen Amigo de Gerli
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
          (no somos refugio ni municipales)
        </Typography>
        <Typography variant="body2" sx={{ color: "#999" }}>
          Sitio web creado por{" "}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ fontWeight: "bold", color: "#1B8D4B" }}
          >
            CODEMI Solutions
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
