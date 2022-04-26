import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Exercis from "./pages/Exercis";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Section1 from "./pages/Section1";

import Slider__Card from "./pages/Slider";
import Accordian1 from "./pages/Accordian1";
import Fetching from "./pages/Asyca";
import ContentCard from "./pages/ContentCard";
import Footer from "./pages/Footer";
// import Main from "./Pochintos/main";

function App() {
  return (
    <>
      <div className="body"></div>
      <NavBar />
      <Home />
      <Card />
      <Section1 />
      <Slider__Card />
      <Accordian1 />
      <ContentCard />
      <Footer />

      {/* <Exercis /> */}
      {/* <Filter /> */}

      {/* <Fetching /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
