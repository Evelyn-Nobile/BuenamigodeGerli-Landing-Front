import { AboutUsSection } from "../../components/AboutSection/AboutSection";
import { Container } from "@mui/material";
const About = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, md: 2 } }}>
      <AboutUsSection />
    </Container>
  );
};

export default About;
