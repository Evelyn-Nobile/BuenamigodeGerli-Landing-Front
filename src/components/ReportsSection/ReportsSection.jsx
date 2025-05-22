import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Divider,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { PetCard } from "../PetCard/PetCard";

export const PetReportsSection = ({ lostPets = [] }) => {
  return (
    <Box sx={{ mb: 12 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <PetsIcon
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
            Mascotas Perdidas
          </Typography>
          <Typography
            sx={{
         
              color: "#666",
              fontSize: "1.1rem",
            }}
          >
            Reportes recientes de la comunidad
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          mb: 6,
          borderColor: "#e0e0e0",
          "&:before, &:after": {
            borderColor: "#1B8D4B",
          },
        }}
      />

      {lostPets.length > 0 ? (
        <Grid container spacing={4}>
          {lostPets.map((pet, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <PetCard>
                <CardMedia
                  component="img"
                  height="240"
                  image={pet.image || `/pet-placeholder-${i + 1}.jpg`}
                  alt={pet.name || "Mascota perdida"}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "'Alexandria', sans-serif",
                        fontWeight: 700,
                        color: "#1B8D4B",
                      }}
                    >
                      {pet.name || "Sin nombre"}
                    </Typography>
                    <Chip
                      label="Perdido"
                      size="small"
                      color="error"
                      sx={{ fontWeight: 600 }}
                    />
                  </Box>

                  {pet.location && (
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <LocationOnIcon
                        sx={{
                          fontSize: "1rem",
                          color: "#FFA500",
                          mr: 0.5,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "'Alexandria', sans-serif" }}
                      >
                        {pet.location}
                      </Typography>
                    </Box>
                  )}

                  {pet.description && (
                    <Typography
                      variant="body1"
                      sx={{
                        mt: 2,
                        fontFamily: "'Alexandria', sans-serif",
                        color: "#555",
                      }}
                    >
                      {pet.description}
                    </Typography>
                  )}

               
                </CardContent>
              </PetCard>
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoResults
          icon={<PetsIcon sx={{ fontSize: "4rem", color: "#ccc" }} />}
          title="No hay reportes recientes"
          description="Revisa más tarde o ayuda reportando un caso"
         
        />
      )}
    </Box>
  );
};

export const NoResults = ({ icon, title, description}) => (
  <Box
    sx={{
      textAlign: "center",
      p: 8,
      backgroundColor: "#f9f9f9",
      borderRadius: "16px",
      border: "2px dashed #e0e0e0",
    }}
  >
    {icon}
    <Typography
      variant="h5"
      sx={{
        fontFamily: "'Alexandria', sans-serif",
        fontWeight: 600,
        color: "#666",
        mb: 1,
        mt: 2,
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontFamily: "'Alexandria', sans-serif",
        color: "#666",
        maxWidth: "500px",
        mx: "auto",
        mb: 3,
      }}
    >
      {description}
    </Typography>
    
  </Box>
);
