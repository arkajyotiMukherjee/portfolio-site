import React, { useRef } from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Wrapper = styled.div`
  .swiper-slide {
    width: fit-content;
  }
`;

// install Swiper modules
SwiperCore.use([Autoplay]);

interface ICarousel {
  children: React.ReactElement[];
}

const Carousel: React.FC<ICarousel> = ({ children }) => {
  if (!children) {
    throw Error(`Carousel require children`);
  }

  const swiperRef = useRef(null);

  return (
    <Wrapper>
      <Swiper
        // @ts-ignore
        ref={swiperRef}
        className="swiper-root"
        autoHeight={true}
        slidesPerView="auto"
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        grabCursor={true}
      >
        {children.map((child, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => {
                //@ts-ignore
                swiperRef.current && swiperRef.current.swiper.slideTo(index);
              }}
            >
              {
                // @ts-ignore
                ({ isActive }) => React.cloneElement(child, { isActive })
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export { Carousel };
