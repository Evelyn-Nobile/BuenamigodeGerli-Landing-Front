import { Container } from "@mui/material";
import { FAQSection } from "../../components/FAQSection/FAQSection";
const Information = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, md: 2 } }}>
      <FAQSection />
    </Container>
  );
};

export default Information;
