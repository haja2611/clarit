import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Fb.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Fb = () => {
  return (
    <>
      {" "}
      <div class="fbpage">
        <div className="fbmovimg"></div>
        <div className="fbtitles">
          <h6 className="fb-title1">OUR FEEDBAKCS</h6>
          <hr className="fbline" />
          <h2 className="fb-title2">What They’re Talking About Company</h2>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="feedbackimg1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedbackimg2"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Fb;
