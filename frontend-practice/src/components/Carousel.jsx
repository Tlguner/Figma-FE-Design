import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

const CustomCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <div className="carousel-content">
            <h3>Startup 3</h3>
            <h1>Forget About Code</h1>
            <p>Startup Framework gives you complete freedom over your creative process - you dont have to think about any technical aspects. There are not limits and absolutely no coding.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-content">
            <h3>Label for second slide</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum incidunt, veniam facilis sapiente consectetur officiis, cumque nisi aliquid repellat impedit maxime deleniti repudiandae consequatur saepe nihil enim nostrum atque!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-content">
            <h3>Label for third slide</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum incidunt, veniam facilis sapiente consectetur officiis, cumque nisi aliquid repellat impedit maxime deleniti repudiandae consequatur saepe nihil enim nostrum atque!</p>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="carousel-content">
            <h3>Label for fourth slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam vitae ipsum, accusamus dolorem inventore doloribus nihil culpa libero veniam perspiciatis iure corrupti consectetur saepe facilis harum non praesentium eos?</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
