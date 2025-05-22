import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  Container,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export const FAQSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const faqItems = [
    {
      question: "¿Cómo puedo reportar una mascota perdida?",
      answer:
        "Puedes reportar una mascota perdida directamente desde nuestra web, ingresando el código de identificación de tu mascota disponible en nuestros collares y/o chapitas en la barra de búsqueda presente en la pantalla de inicio. Esto mostrará los datos de tu mascota y tus datos de contacto. Y al hacer clic en el botón 'Reportar mascota perdida', esos datos estarán a la vista en nuestra pantalla de inicio (por favor, usar esta herramienta con responsabilidad y no realizar reportes falsos). ",
    },
    {
      question:
        "¿Qué debo hacer si encuentro una mascota con medalla identificatoria de Buen Amigo de Gerli?",
      answer:
        "Si encuentras una mascota con medalla de nuestro sistema, ingresa el código de identificación en el buscador principal de nuestra página. El sistema te mostrará los datos de contacto del dueño para que puedas comunicarte directamente con ellos. Recordá revisar también la sección de 'Mascotas Perdidas' para ver si la mascota ya fue reportada. Si ya fue reportada, tendrás los datos más al alcance y cuando haya reencuentro, podés hacer click en el botón 'Reportar reencuentro' para evitar consfusiones (por favor, usar esta herramienta con responsabilidad y no reportar reencuentros falsos).",
    },
    {
      question: "¿Cómo funciona el sistema de collares identificatorios?",
      answer:
        "Nuestros collares tienen un código QR y un código de identificación único que vincula a la mascota con su dueño en nuestra base de datos. Al escanear el código QR te lleva a nuestra página. Y el código de identificación contiene los datos de tu mascota y tus datos de contacto previamentes proporciandos a Gladys, la responsable de la organización. Podes obtener uno en nuestras jornadas de identificación gratuitas.",
    },
    {
      question: "¿Qué costo tiene participar en las jornadas de castración?",
      answer:
        "Nuestras jornadas de castración son completamente gratuitas. Podés obtener información sobre nuestra próxima campaña en nuestras redes sociales.",
    },
    {
      question:
        "¿Por qué es importante esterilizar a las mascotas y cuándo debe hacerse?",
      answer: (
        <>
          <Typography component="p" sx={{ mb: 2 }}>
            <strong>Importancia de la esterilización:</strong>
          </Typography>
          <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
            <li>
              Previene enfermedades como cáncer de mama, útero y próstata.
            </li>
            <li>
              Evita camadas no deseadas que contribuyen al abandono animal.
            </li>
            <li>
              Reduce comportamientos problemáticos (marcaje, agresividad,
              fugas).
            </li>
            <li>
              Disminuye la sobrepoblación de animales en situación de calle.
            </li>
            <li>Mejora la calidad y esperanza de vida de tu mascota.</li>
          </Typography>

          <Typography component="p" sx={{ mb: 2 }}>
            <strong>Edad recomendada para esterilización:</strong>
          </Typography>
          <Typography component="div" sx={{ pl: 2 }}>
            <Box sx={{ mb: 1 }}>
              <strong>Perros:</strong> Entre 6 y 12 meses de edad (antes del
              primer celo en hembras).
            </Box>
            <Box sx={{ mb: 1 }}>
              <strong>Gatos:</strong> Entre los 4 y 6 meses de edad (pueden
              reproducirse muy temprano).
            </Box>
            <Box>
              <em>
                En ambos casos, consulta siempre con un veterinario ya que puede
                variar según raza y salud del animal.
              </em>
            </Box>
          </Typography>

          <Typography component="p" sx={{ mt: 2, fontStyle: "italic" }}>
            En nuestras jornadas de castración gratuita seguimos estos
            protocolos veterinarios para garantizar la seguridad de los
            animales.
          </Typography>
        </>
      ),
    },
    {
      question: "¿Cómo puedo colaborar con la organización?",
      answer:
        "Podes colaborar a través de donaciones para nuestras ferias americanas y rifas. También podes convertirte en un Amigo Patitas con una colaboración mensual. Escribinos por WhatsApp o visitanos en Facebook para más información.",
    },
    {
      question: "Ya soy Amigo Patitas, ¿Ahora qué puedo hacer?",
      answer:
        "Si te convertiste en un nuevo Amigo Patitas, te pedimos que nos escribas a traves de WhatsApp o nuestro correo con tus datos e indicando tu colaboración y pondremos los datos de tu emprendimiento o negocio en nuestra página de inicio como agredecimiento.",
    },
    {
      question:
        "¿Por qué ya no aparezco en la página de inicio como Amigo Patitas?",
      answer:
        "Los Amigos Patitas se renuevan mensualmente. Para que tu emprendimiento o negocio vuelva a aparecer en nuestra página de inicio, tenés que realizar una nueva colaboración mensual. Si crees que se trata de un error, escribinos a traves de nuestros canales de contacto.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fcffff",
        py: isMobile ? 4 : isTablet ? 6 : 8,
        px: isMobile ? 2 : 4,
        borderTop: "3px solid #e0f2e9",
        borderBottom: "3px solid #e0f2e9",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: isMobile ? 3 : 4,
          }}
        >
          <PetsIcon
            sx={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              color: "#FFA500",
              background: "#1B8D4B",
              p: 1,
              borderRadius: "50%",
            }}
          />
          <Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.3rem",
                },
                fontWeight: 700,
                color: "#1B8D4B",
              }}
            >
              Información Importante
            </Typography>
            <Typography
              sx={{
                color: "#666",
                fontSize: isMobile ? "0.9rem" : "1.05rem",
                fontFamily: "'Alexandria', sans-serif",
                mt: isMobile ? 0.5 : 1,
              }}
            >
              Resolvemos tus dudas y te brindamos consejos útiles
            </Typography>
          </Box>
        </Box>

        <Divider
          sx={{
            mb: isMobile ? 4 : 6,
            borderColor: "#e0e0e0",
            "&:before, &:after": {
              borderColor: "#1B8D4B",
            },
          }}
        />

        <Box
          sx={{
            maxWidth: "800px",
            mx: "auto",
            "& .MuiAccordion-root": {
              boxShadow: "none",
              border: "2px solid #e0f2e9",
              borderRadius: "12px !important",
              mb: 2,
              "&:before": {
                display: "none",
              },
            },
            "& .MuiAccordionSummary-root": {
              backgroundColor: "#f0faf5",
              borderRadius: "10px",
              minHeight: isMobile ? "60px" : "72px",
              "&.Mui-expanded": {
                minHeight: isMobile ? "60px" : "72px",
                backgroundColor: "#e0f2e9",
              },
            },
            "& .MuiAccordionDetails-root": {
              backgroundColor: "#ffffff",
              borderRadius: "0 0 10px 10px",
              padding: isMobile ? "12px 16px" : "16px 24px",
            },
          }}
        >
          {faqItems.map((item, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#1B8D4B",
                      fontSize: isMobile ? "1.5rem" : "1.8rem",
                    }}
                  />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: isMobile ? "0.95rem" : "1.1rem",
                    color: "#1B8D4B",
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#555",
                    lineHeight: 1.6,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mt: isMobile ? 4 : 6,
            backgroundColor: "#f0faf5",
            p: isMobile ? 2 : 3,
            borderRadius: "16px",
            border: "2px solid #e0f2e9",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontSize: isMobile ? "1.2rem" : isTablet ? "1.4rem" : "1.6rem",
              fontWeight: 600,
              color: "#1B8D4B",
              mb: 3,
            }}
          >
            ¿No encontraste lo que buscabas?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              fontSize: isMobile ? "0.9rem" : "1rem",
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Contactanos directamente a través de nuestros canales de atención y
            con gusto resolveremos todas tus dudas sobre mascotas perdidas,
            castraciones o cómo colaborar con nuestra organización.
          </Typography>

          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5491131546827?text=Hola,%20me%20gustaría%20obtener%20más%20información"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                "&:hover": {
                  backgroundColor: "#128C7E",
                },
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
              }}
            >
              WhatsApp
            </Button>

            <Button
              variant="contained"
              startIcon={<FacebookIcon />}
              href="https://www.facebook.com/profile.php?id=100010636781684"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#1877F2",
                color: "white",
                "&:hover": {
                  backgroundColor: "#1466C2",
                },
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
              }}
            >
              Facebook
            </Button>

            <Button
              variant="contained"
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/buenamigodegerli_gladys"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background:
                  "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)",
                color: "white",
                "&:hover": {
                  opacity: 0.9,
                },
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
              }}
            >
              Instagram
            </Button>

            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:buenamigodegerli@gmail.com"
              sx={{
                backgroundColor: "#FFA500",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e69500",
                },
                px: 3,
                py: 1.5,
                borderRadius: "50px",
                textTransform: "none",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
              }}
            >
              Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
