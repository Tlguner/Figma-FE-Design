import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperCarousel = () => {
  return (
    <Swiper
       // Dikey geçiş
      slidesPerView={1} // Her seferinde 1 slayt göster
      spaceBetween={30} // Slaytlar arası boşluk
      mousewheel={false} // Fare kaydırma ile geçiş
      pagination={{ clickable: true }} // Sağda noktalar olsun
      loop={true}
      autoplay={{delay:5000}}
      navigation={true} // Oklarla da kontrol edilebilir
      modules={[Pagination, Navigation]} // Modülleri ekledik
      style={{ height: "300px" }} // Tam ekran kaplasın
    >
      <SwiperSlide>
        <div className="slide-content">
          <h2>We Create Something New</h2>
          <p>
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h2>30 New Feature Pages</h2>
          <p>
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <h2>Useful Symbol Components</h2>
          <p>
            Samples will show you the feeling on how to play around using the
            components.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;