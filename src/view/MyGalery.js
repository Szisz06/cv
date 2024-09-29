import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./mygalery.css";

function MyGalery() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={require("./mygalery/Kicsi1.jpg")} alt="First slide" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={require("./mygalery/Kicsi2.jpg")}
          alt="Second slide"
          fluid
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./mygalery/Kicsi3.jpg")} alt="Third slide" fluid />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyGalery;
