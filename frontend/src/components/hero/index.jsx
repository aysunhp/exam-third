import React from "react";
import "./../hero/hero.scss";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <ul>
            <li>HOME</li>
            <li>MENU</li>
          </ul>
          <h1>Discover our Exclusive Menus</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const Hero = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

// export default Hero;
