import React from 'react'
import banner_sm_2 from "../../public/assets/img/banner/banner-sm-2.jpg";

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,Navigation } from 'swiper/modules';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faHeart,faShare,faStar } from '@fortawesome/free-solid-svg-icons';
import { useSharedContext } from '../context/SharedProvider';

function Slide_product_2({items}) {
    const {addToCart,activeIcons} = useSharedContext();
  return (
    <div>
         <section className="slide slide_product">
            <div className="container">

                <div className="top_slide">
                    <h2>Computer & Desktop <span>products</span></h2>
                </div>

                <div className="slide_with_img">

                    <div className="product_swip mySwiper">
                        <div className="products swiper-wrapper">
                            <Swiper
                                modules={[Pagination,Autoplay]}
                                slidesPerView={4}
                                spaceBetween={30}
                                autoplay={{delay: 3000}}
                                loop: true
                                breakpoints={{
                                    1500:{
                                        slidesPerView:4
                                    },
                                    1200:{
                                        slidesPerView:3,
                                        spaceBetween: 30,
                                    },
                                    900:{
                                        slidesPerView:2,
                                        spaceBetween: 15,
                                    },
                                    700:{
                                        slidesPerView:3,
                                        spaceBetween: 15,
                                    },
                                    0:{
                                        slidesPerView:2,
                                        spaceBetween:10,
                                    },
                                }}
                            >
                                {
                                    items.map(item =>
                                        <SwiperSlide key={item.id} className="product swiper-slide">
                                            <div className="icons">
                                                <span>
                                                    <FontAwesomeIcon  
                                                        onClick={() => {addToCart(item);}}
                                                        className={`slideIcon ${activeIcons.includes(item) ? "active" : ''}`}
                                                        icon={faCartPlus}
                                                        // ref={(el) => {iconRefs.current[item.id] = el}}
                                                    />
                                                </span>  
                                                <span><FontAwesomeIcon className='slideIcon' icon={faHeart}/></span> 
                                                <span><FontAwesomeIcon className='slideIcon' icon={faShare}/></span> 
                                            </div>
                                            <div className="img_product">
                                                <img src={item.img} alt="" />
                                                <img src={item.img_hover} className="img_hover" alt="" />
                                            </div>
                                            <h3 className="name_product">
                                                <a href="productItemPage.html?productId={item.id}" id="productItem">{item.name}</a>
                                            </h3>
                                            <div className="stars">
                                                <FontAwesomeIcon icon={faStar} className='star'/>
                                                <FontAwesomeIcon icon={faStar} className='star'/>
                                                <FontAwesomeIcon icon={faStar} className='star'/>
                                                <FontAwesomeIcon icon={faStar} className='star'/>
                                                <FontAwesomeIcon icon={faStar} className='star'/>
                                            </div>
                                            <div className="price">
                                                <p><span>${item.price}</span></p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>

                        <div className="swiper-button-next btn_swip"></div>
                        <div className="swiper-button-prev btn_swip"></div>

                    </div>

                    <div className="categ_img">
                        <a href="#"><img src={banner_sm_2} alt="" /></a>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Slide_product_2