import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./boozeNow.css";
import b1 from "./gallery/b1.png";
import b2 from "./gallery/b2.png";
import b3 from "./gallery/b3.png";
import b4 from "./gallery/b4.png";
import b5 from "./gallery/b5.png";
import b6 from "./gallery/b6.png";

export default function BoozeNow() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      original: b1,
      thumbnail: b1,
    },
    {
      original: b2,
      thumbnail: b2,
    },
    {
      original: b3,
      thumbnail: b3,
    },
    {
      original: b4,
      thumbnail: b4,
    },
    {
      original: b5,
      thumbnail: b5,
    },
    {
      original: b6,
      thumbnail: b6,
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="booze-now">
      <h1>Booze Now</h1>

      <ImageGallery
        className="image-galery"
        items={images}
        startIndex={selectedImageIndex}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(index)}
            className={`thumbnail ${
              index === selectedImageIndex ? "selected" : ""
            }`}
          />
        ))}
      </div>

      <h2>
        A Booze Now egy úttörő projekt. A szakdolgozatunk egy piaci rés
        kihasználásával tenné egyszerűbbé a vendéglátók és a vendégek életét is.
        Az ötlet a pubokra és szórakozóhelyekre specializálódott, úgy
        kivitelezve, hogy a vendégek a telefonjukról rendeljenek. A
        webalkalmazás teljes folyamata, a tervezéstől a tesztelésig, a lejjebb
        található Dokumentációra kattintva érhető el. A frontend és a backend
        kód a GitHub linken keresztül elérhető. A projektben az én feladataim
        közé tartozott az adatbázis és a drótváz tervezése, a frontend oldalon a
        felhasználói felület tervezése, leprogramozása, illetve a tesztelés.
        Köszönettel tartozom fejlesztőtársaimnak, Antal Ferencnek és Schopper
        Zsoltnak.
      </h2>

      <h2>
        <a
          href="https://github.com/booze-now"
          target="_blank"
          rel="noopener noreferrer"
        >
          A projekt GitHub linkje
        </a>
      </h2>

      <h2>
        <a
          href="https://docs.google.com/document/d/1ClMO8asB3KhNkM8TVvUtrIHfdESTulud/edit#heading=h.1t3h5sf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dokumentáció
        </a>
      </h2>
      <h3>Készítette: </h3>
      <h2>Schopper Zsolt, Antel Ferenc, Mócza Szilvia</h2>
    </div>
  );
}
//Booze Now is a groundbreaking project. By taking advantage of a market niche, our thesis would make the life of caterers and guests easier. The idea is specialized for pubs and entertainment venues, so that guests can order from their phones. The entire process of the web application, from design to testing, can be found under the documentation menu item below. The frontend and backend code are available on the github link. In the project, my tasks included the design of the database and wireframe, the design, programming and testing of the user interface on the frontend side. I am indebted to my fellow developers Ferenc Antal and Zsolt Schopper.
