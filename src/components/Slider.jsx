import React from 'react';
import "../../public/assets/App.css";
import slider_01 from "../../public/assets/img/slider-01.jpg";
import slider_02 from "../../public/assets/img/slider-02.jpg";
import slider_03 from "../../public/assets/img/slider-03.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Slider() {

  return (
    <div>
        <section className="slider">
            <div className="container">
                <div className="side_bar">
                    <h2><FontAwesomeIcon icon={faBars}/> Shop By department</h2>
                    <a href="#">All Categories</a>
                    <a href="#">Best Seller Products</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Top 10 Offers</a>
                    <a href="#">Phones & Tablet</a>
                    <a href="#">ُElectronics & Digita</a>
                    <a href="#">Fashion & Clothes</a>
                    <a href="#">Jewelry & Watches</a>
                    <a href="#">TV & Audio</a>
                </div>

                {/* <!-- Swiper --> */}
                <Swiper pagination={{dynamicBullests: true,clickable:true}} modules={[Pagination,Autoplay]} loop={true} autoplay={{autoplay:2500}} className="slide-swp mySwiper">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <a href="#"><img src={slider_01} alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <a href="#"><img src={slider_02} alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <a href="#"><img src={slider_03} alt="" /></a>
                        </SwiperSlide>
                    </div>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Slider