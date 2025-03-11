import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const NpmCarousel = () => {
  return (
    <div>
      <Carousel axis="vertical" showThumbs={false} showStatus={false} showIndicators={true}>
        <div>
          <p className="legend">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatum aliquam laboriosam expedita tempore ut dolore iure asperiores sed vel mollitia sequi rem, culpa rerum nihil officia velit molestias consectetur?</p>
        </div>
        <div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default NpmCarousel;
