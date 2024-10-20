import About from "./components/about/about";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import { servicesData } from "./data/services";

function App() {
  return (
    <div className="">
      <Navbar />
      <About />
      <Home />
      <Services services={servicesData} />
    </div>
  );
}

export default App;
