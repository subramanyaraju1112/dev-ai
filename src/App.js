import "./App.css";
import AppBar from "./components/Navbar";
import Heading from "./components/Heading";
import Scholar from "./components/Scholar";
import Container from "@mui/material/Container";
import Gencode from "./components/Gencode";
import Lists from "./components/Lists";
import Writing from "./components/Writing";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
        <Heading />
        <hr />
        <Scholar />
        <hr />
        <Gencode />
        <hr />
        <Lists />
        <hr />
        <Writing />
        <hr />
        <Disclaimer />
        <hr />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
