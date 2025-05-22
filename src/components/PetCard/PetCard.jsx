import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const PetCard = styled(Card)({
  borderRadius: "16px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(27, 141, 75, 0.2)"
  }
});