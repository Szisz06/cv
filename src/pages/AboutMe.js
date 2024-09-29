import AboutMeText from "../view/AboutMeText";
import MyGalery from "../view/MyGalery";
import TimeLine from "../view/Timeline";
import "./aboutme.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1 className="about">Pár szó rólam: </h1>
      <div className="timeline"><TimeLine /></div>
      <AboutMeText/>
      <MyGalery />
    </div>
  );
}

