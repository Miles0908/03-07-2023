import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../../scss/helpers/swiper.scss";

import { Pagination, Navigation } from "swiper/modules";

import styles from "./Hero.module.scss";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Hero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.Hero}>
      <div className="container">
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          className={styles.swiper}
          navigation={{
            prevEl: prevRef.current ? prevRef?.current : undefined,
            nextEl: nextRef.current ? nextRef?.current : undefined,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <SwiperSlide>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </SwiperSlide>
          <div
            className={`${styles.navigation} ${styles.prevButton}`}
            ref={prevRef}
          >
            <FaAngleLeft />
          </div>
          <div
            className={`${styles.navigation} ${styles.nextButton}`}
            ref={nextRef}
          >
            <FaAngleRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
