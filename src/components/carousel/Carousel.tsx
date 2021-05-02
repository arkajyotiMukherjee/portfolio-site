import React from "react";
import styled, { useTheme } from "styled-components";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Wrapper = styled.div`
  .swiper-wrapper {
    height: 380px;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .swiper-pagination {
    bottom: 0;
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

  const { screens } = useTheme();

  return (
    <Wrapper>
      <Swiper
        className="swiper-root"
        slidesPerView={"auto"}
        spaceBetween={40}
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
          [screens.sm]: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          [screens.md]: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          [screens.lg]: {
            slidesPerView: 3,
            spaceBetween: 40,
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
