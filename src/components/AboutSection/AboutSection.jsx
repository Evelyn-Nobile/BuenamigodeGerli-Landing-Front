/* eslint-disable no-unused-vars */
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Avatar,
  Container,
  Link,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Animación
const scaleInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const AnimatedAvatar = styled(Avatar)(({ theme }) => ({
  animation: `${scaleInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  boxShadow: "0 8px 24px rgba(27, 141, 75, 0.2)",
  border: "3px solid #e0f2e9",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const AboutUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const images = [
    {
      name: "Buen Amigo de Gerli",
      description: "Más de dos décadas de compromiso",
      image: "/assets/1.webp",
    },
    {
      name: "Jornadas de castraciones gratuitas",
      description: "Esterilizar salva vidas",
      image: "/assets/2.webp",
    },
    {
      name: "Jornadas de identificación gratuitas",
      description: "Más de 9.500 identificaciones realizadas",
      image: "/assets/3.webp",
    },
    {
      name: "Ferias Americanas y rifas",
      description: "Para recaudar fondos y seguir haciendo esto posible",
      image: "/assets/4.webp",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fcffff",
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4 },
        borderTop: "3px solid #e0f2e9",
        borderBottom: "3px solid #e0f2e9",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 6, md: 8 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              fontWeight: 700,
              color: "#1B8D4B",
              mb: 2,
            }}
          >
            Nuestra Historia y Misión
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
              mt: 4,
            }}
          >
            Buen Amigo de Gerli nació en el año 2003 con la intención de unir
            voluntades y trabajar juntos haciendo aquello que en forma
            individual es más difícil.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Todo lo que hacemos es posible gracias a nuestros aportes personales
            y a la colaboración de nuestras Madrinas de Castración y Amigos
            Patitas, así como a la venta de Rifas y la realización de Ferias
            Americanas, entre otras actividades.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Este grupo está conformado por un pequeño número de personas que
            colaboran de diversas maneras: un Equipo para Jornadas de
            Castración, otro para Jornadas de Identificación gratuita, y otro
            para los días de Feria Americana.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            También contamos con un reducido número de Amigos Patitas, quienes
            colaboran con donaciones voluntarias para ayudarnos en diversas
            tareas. Sin embargo, somos pocos y nunca es suficiente.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Por eso, hemos creado esta página para acercarnos a ustedes y lograr
            que el número de Amigos Patitas aumente, permitiéndonos así hacer
            más por los animales.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Durante estos años, hemos realizado más de 16.000 castraciones,
            inicialmente en el corazón de barrios carentes y ahora en Gerli,
            atendiendo animales de todas partes.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Además, hemos entregado más de 9.500 collares identificatorios con
            un código único para cada animal, lo que nos ha ayudado a reunir a
            muchos perdidos.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.15rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
            }}
          >
            Cada vida cuenta, y cada acto de amor suma. Cuando ayudás, no solo
            cambiás la vida de un animal, también transformás el mundo en un
            lugar más justo y solidario. ¡Sé parte del cambio que ellos
            necesitan!
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", mt: { xs: 6, sm: 8, md: 10 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2rem",
                lg: "2.2rem",
              },
              fontWeight: 600,
              color: "#1B8D4B",
              mb: { xs: 3, sm: 4, md: 5 },
            }}
          >
            Nuestro Compromiso
          </Typography>

          <Grid
            container
            spacing={isMobile ? 4 : isTablet ? 5 : 6}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            {images.map((member, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={3}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    animationDelay: `${index * 0.1 + 0.2}s`,
                  }}
                >
                  <AnimatedAvatar
                    alt={member.name}
                    src={member.image}
                    sx={{
                      width: {
                        xs: 100,
                        sm: 130,
                        md: 150,
                        lg: 180,
                      },
                      height: {
                        xs: 100,
                        sm: 130,
                        md: 150,
                        lg: 180,
                      },
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant={isTablet ? "subtitle1" : "h6"}
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontFamily: "'Alexandria', sans-serif",
                      mb: 0.5,
                      fontSize: isTablet ? "1rem" : "1.1rem",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#FFA500",
                      fontWeight: 500,
                      fontFamily: "'Alexandria', sans-serif",
                      fontSize: isTablet ? "0.85rem" : "0.9rem",
                    }}
                  >
                    {member.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            mt: { xs: 6, sm: 8, md: 10 },
            backgroundColor: "#f0faf5",
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: "16px",
            border: "2px solid #e0f2e9",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontSize: {
                xs: "1.3rem",
                sm: "1.5rem",
                md: "1.7rem",
                lg: "1.8rem",
              },
              fontWeight: 600,
              color: "#1B8D4B",
              mb: 3,
            }}
          >
            ¿Querés ser un amigo patitas?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              fontSize: {
                xs: "1rem",
                sm: "1.05rem",
                md: "1.1rem",
              },
              color: "#555",
              lineHeight: 1.6,
              fontFamily: "'Alexandria', sans-serif",
              mb: 3,
            }}
          >
            Somos una organización sin fines de lucro y tu ayuda es fundamental
            para ayudar a miles de animales. Si deseas colaborar, te invitamos a
            que nos escribas a nuestro{" "}
            <Link
              href="https://wa.me/5491131546827?text=Hola%20Gladys.%20Estoy%20interesado%2Fa%20en%20ser%20un%20amigo%20patitas.%20¿Cómo%20podemos%20ayudar?%20"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#FFA500",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              WhatsApp
            </Link>{" "}
            o visites nuestro{" "}
            <Link
              href="https://www.facebook.com/profile.php?id=100010636781684"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#FFA500",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Facebook
            </Link>
            , donde con gusto te explicaremos cómo hacerlo.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
