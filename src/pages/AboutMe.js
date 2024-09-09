import AboutMeText from "../view/AboutMeText";
import Footer from "../view/Footer";
import MyGalery from "../view/MyGalery";
import TimeLine from "../view/Timeline";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="about">About Me</h1>
      <TimeLine />
      <AboutMeText/>
      <MyGalery />
      <Footer />
    </div>
  );
}

//reszponzív legyen (horizontális timeline? )
//timeline kattintható legyen, bekezdéshez ugorjon az oldal
// jobb minőségű, több kép a galerybe
// képek leírása , galery leírás hozzáadása
//Köszönet elköszönés az oldal aljára.
