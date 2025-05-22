import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Information from "./pages/Information/Information";
import Footer from "./components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "'Alexandria', sans-serif",
    h1: {
      fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
    },
    h2: {
      fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
    },
    h3: {
      fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
    },
    h4: {
      fontFamily: `"Comic Relief", "Comic Neue", cursive, sans-serif`,
    },
    
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <div className="main-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/informacion-importante" element={<Information />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

