import React from "react";
import styled from "styled-components";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { theme } from "../../styles/theme";

const Wrapper = styled.div`
  .swiper-slide {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .swiper-pagination {
    bottom: -5px;
  }
`;

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

interface ICarousel {
  children: React.ReactElement[];
}

const Carousel: React.FC<ICarousel> = ({ children }) => {
  if (!children) {
    throw Error(`Carousel require children`);
  }

  return (
    <Wrapper>
      <Swiper
        className="swiper-root"
        autoHeight={true}
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        breakpoints={{
          [theme.screens.md]: {
            spaceBetween: 0,
          },
        }}
      >
        {children.map((child, index) => {
          return (
            <SwiperSlide key={index}>
              {// @ts-ignore
              ({ isActive }) => React.cloneElement(child, { isActive })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export { Carousel };
