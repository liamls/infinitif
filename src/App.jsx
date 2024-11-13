import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Map from "./pages/Map";
import Tableau from "./pages/Tableau";
import Data from "./pages/Data";
import Vote from "./pages/Vote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<Data />} />
        <Route path="/data/table" element={<Tableau />} />
        <Route path="/data/map" element={<Map />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
