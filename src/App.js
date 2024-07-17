import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyWorks from "./pages/MyWorks";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./view/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;

//myworks, aboutme, contact oldalak elkészítése
//fordító integrálása,
//footer: github, linkedin iconok, szöveg középre, webes nézeten kívül nem jó a megjelenés! - kész 07.17
//skillek megadása, formázása - kész 07.16
//home page szövegeinek szinezése, formázása telefonos és webes nézethez is - kész 07.16

