import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyWorks from "./pages/MyWorks";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Navbar from "./view/Navbar";
import BoozeNow from "./pages/BoozeNow";
import Portfolio from "./pages/Portfolio";
import Footer from "./view/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booze-now" element={<BoozeNow />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

