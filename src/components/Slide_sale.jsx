import React, { useEffect, useState,useRef } from 'react';
import "../../public/assets/App.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faHeart,faShare,faStar } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import { useSharedContext } from '../context/SharedProvider';

function Slide_sale({items}) {

    const {addToCart,activeIcons} = useSharedContext();
    
    function persent_disc(old_price,price){
        return Math.floor((old_price - price) / old_price * 100);
    }

  return (
    <div>
        <section className="slide slide_sale">
            <div className="container">
                <div className="sale_sec mySwiper">

                    <div className="top_slide">
                        <h2>on sale <span>product</span></h2>
                    </div>

                    <div id="swiper_items_sale" className="products swiper-wrapper">
                        <Swiper 
                            modules={[Pagination,Autoplay,Navigation]} 
                            spaceBetween={30}
                            slidesPerView={5}
                            loop={true} 
                            autoplay={{delay: 3000}}
                            breakpoints={{
                                1600: {
                                  slidesPerView: 5,
                                },
                                1200: {
                                  slidesPerView: 4,
                                  spaceBetween: 30,
                                },
                                700: {
                                  slidesPerView: 3,
                                  spaceBetween: 15,
                                },
                                500: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                0: {
                                  slidesPerView: 1,
                                },
                            }}
                        > 
                        {
                            items.map( item => 
                                item.old_price && 
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
                                        <span className="sale_persent">%{persent_disc(item.old_price,item.price)}</span>
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
                                            <p><span>{item.price}</span></p>
                                            <p className="old_price">{item.old_price}</p>
                                        </div>
                                    </SwiperSlide>
                            )
                        }
                        </Swiper>
                    </div>
                    <div className="swiper-button-next btn_swip"></div>
                    <div className="swiper-button-prev btn_swip"></div>
                </div>
            </div>
            {/* {selectedItem && <Cart selectedItem={selectedItem}/>} */}

        </section>
    </div>
  )
}

export default Slide_sale