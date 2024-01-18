import "./../hero/hero.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="hero">
          <div className="container">
            <ul>
              <li>HOME</li>
              <li>MENU</li>
            </ul>
            <h1>Tasty and Delicious</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="hero">
          <div className="container">
            <ul>
              <li>HOME</li>
              <li>MENU</li>
            </ul>
            <h1>Discover our Exclusive Menus</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="hero">
          <div className="container">
            <ul>
              <li>HOME</li>
              <li>MENU</li>
            </ul>
            <h1>Discover our Exclusive Menus</h1>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Hero;
