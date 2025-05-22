import { PetReportsSection } from "../../components/ReportsSection/ReportsSection";
import {SearchHero} from "../../components/SearchHero/SearchHero";
import { SponsorsSection } from "../../components/SponsorSection/SponsorSection";
import { Container } from "@mui/material";
const Home = () => {
    const lostPets = []; 
    
  const sponsors = [
    // {
    //   name: "Sponsor 1",
    //   image: "https://via.placeholder.com/150",
    // },
    // {
    //   name: "Sponsor 2",
    //   image: "https://via.placeholder.com/150",
    // },
    // {
    //   name: "Sponsor 3",
    //   image: "https://via.placeholder.com/150",
    // },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 6, px: { xs: 2, md: 4 } }}>

      <SearchHero />
      <PetReportsSection lostPets={lostPets}/>
      <SponsorsSection  sponsors={sponsors}/>
    </Container>
  );
};

export default Home;
