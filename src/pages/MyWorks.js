import React, { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./myWorks.css";

export default function MyWorks() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = portfolioRef.current; // Create a variable to hold the current ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [portfolioRef]);

  return (
    <div className="my-works">
      <h1>My Works</h1>

      <Card className="boozenow">
        <Card.Body>
          <Card.Title>BoozeNow</Card.Title>
          <Carousel>
            <Carousel.Item>
              <Image src={require("./gallery/b1.png")} alt="Booze Now" fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={require("./gallery/b4.png")} alt="Itallap" fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={require("./gallery/b6.png")} alt="Kosár" fluid />
            </Carousel.Item>
          </Carousel>
          <Link to="/booze-now">
            <button>Tekintse meg a Booze Now projekt-et</button>
          </Link>
        </Card.Body>
      </Card>

      <Card className="portfolio" ref={portfolioRef}>
        <Card.Body>
          <Card.Title>Portfólióm</Card.Title>
          <Carousel>
            <Carousel.Item>
              <Image
                src={require("./gallery/p1.png")}
                alt="Portfólió kép 1"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={require("./gallery/p4.png")}
                alt="Portfólió kép 2"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={require("./gallery/p6.png")}
                alt="Portfólió kép 3"
                fluid
              />
            </Carousel.Item>
          </Carousel>
          <Link to="/portfolio">
            <button>Tekintse meg a Portfólió projekt-et</button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
