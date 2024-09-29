import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./boozeNow.css";
import p1 from "./gallery/p1.png";
import p2 from "./gallery/p2.png";
import p4 from "./gallery/p4.png";
import p5 from "./gallery/p5.png";
import p6 from "./gallery/p5.png";

export default function Portfolio() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      original: p1,
      thumbnail: p1,
    },
    {
      original: p2,
      thumbnail: p2,
    },
    {
      original: p4,
      thumbnail: p4,
    },
    {
      original: p5,
      thumbnail: p5,
    },
    {
      original: p6,
      thumbnail: p6,
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="booze-now">
      <h1>My Portfolio</h1>

      <ImageGallery
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
        Ez a portfólió oldalam, amelyet azzal a céllal hoztam létre, hogy az
        önéletrajzom mellé átfogó bemutatkozást nyújtsak. Az oldalon
        megtalálhatóak eddigi tanulmányaim, projektjeim, valamint frontend
        fejlesztés területén szerzett tapasztalataim. A weboldalt önállóan
        terveztem és készítettem el, hogy bemutassam szakmai készségeimet az
        álláshirdetők számára, valamint szemléltethessem a tervezési és
        programozási tudásomat. Célom, hogy ezen a platformon keresztül
        demonstráljam kreatív megközelítéseimet és a modern webfejlesztési
        technológiákban való jártasságomat.
      </h2>

      <h2>
        <a
          href="https://github.com/Szisz06/cv"
          target="_blank"
          rel="noopener noreferrer"
        >
          A projekt GitHub linkje
        </a>
      </h2>

      <h3>Készítette:</h3>
      <h2>Mócza Szilvia</h2>
    </div>
  );
}
