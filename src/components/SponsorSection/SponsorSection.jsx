import { Box, Typography, Grid, Card, Divider } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { NoResults } from "../ReportsSection/ReportsSection";

export const SponsorsSection = ({ sponsors = [] }) => {
  return (
    <Box sx={{ mb: 6 }}>
      {/* Encabezado */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
          flexWrap: "wrap",
        }}
      >
        <GroupsIcon
          sx={{
            fontSize: "2.5rem",
            color: "#FFA500",
            background: "#1B8D4B",
            p: 1,
            borderRadius: "50%",
          }}
        />
        <Box>
          <Typography variant="h4" component="h2">
            Amigos Patitas
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "1.1rem" }}>
            Patrocinadores que hacen posible nuestra labor
          </Typography>
        </Box>
      </Box>

      {/* Línea divisora */}
      <Divider
        sx={{
          mb: 6,
          borderColor: "#e0e0e0",
          "&:before, &:after": {
            borderColor: "#1B8D4B",
          },
        }}
      />

      {/* Sponsors o mensaje vacío */}
      {sponsors.length > 0 ? (
        <Grid container spacing={4} justifyContent="center">
          {sponsors.map((sponsor) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={sponsor.id}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "16px",
                  boxShadow: "0 5px 15px rgba(27, 141, 75, 0.1)",
                  border: "1px solid #e0f2e9",
                }}
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "120px",
                    mb: 3,
                    borderRadius: "50%",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    border: "2px solid #e0e0e0",
                  }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    style={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                    fontWeight: 700,
                    color: "#1B8D4B",
                    textAlign: "center",
                    mb: 1,
                  }}
                >
                  {sponsor.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoResults
          icon={
            <GroupsIcon
              sx={{
                fontSize: "4rem",
                color: "#ccc",
                fontFamily: "'Alexandria', sans-serif",
              }}
            />
          }
          title="Aún no tenemos patrocinadores"
          description="¿Te gustaría ser el primero en apoyar esta causa? Escribinos"
          buttonText="Quiero ser sponsor"
        />
      )}

      {/* Invitación y botones de contacto (siempre visibles) */}
      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{
            mb: 2,
            color: "#1B8D4B",
            fontWeight: "bold",
            fontFamily: "'Alexandria', sans-serif",
          }}
        >
          ¿Querés sumarte como patrocinador?
        </Typography>
        <Typography
          align="center"
          sx={{ mb: 4, color: "#666", fontFamily: "'Alexandria', sans-serif" }}
        >
          Escribinos y te contamos cómo podés ayudarnos
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/5491131546827?text=Hola%20Gladys.%20Estoy%20interesado%2Fa%20en%20ser%20un%20amigo%20patitas.%20¿Cómo%20podemos%20ayudar?%20"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#1B8D4B",
                color: "#fff",
                px: 3,
                py: 1.5,
                borderRadius: "8px",
                fontWeight: "bold",
                fontFamily: "'Comic Relief', cursive, sans-serif !important",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#20ba59",
                },
              }}
            >
              <WhatsAppIcon />
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Comic Relief', cursive, sans-serif !important",
                }}
              >
                Contactar por WhatsApp
              </span>
            </Box>
          </a>

          {/* Email */}
          <a
            href="buenamigodegerli@gmail.com?subject=Quiero%20ser%20sponsor&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20c%C3%B3mo%20puedo%20ser%20sponsor."
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#1B8D4B",
                color: "#fff",
                px: 3,
                py: 1.5,
                borderRadius: "8px",
                fontWeight: "bold",
                fontFamily: "'Comic Relief', cursive, sans-serif",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
            >
              <EmailIcon />
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Comic Relief', cursive, sans-serif",
                }}
              >
                Contactar por Email
              </span>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};
