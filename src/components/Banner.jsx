import React from 'react';
import "../../public/assets/App.css";
import bannerImg_1 from '../../public/assets/img/banner/banner-1.jpg';
import bannerImg_2 from '../../public/assets/img/banner/banner-2.jpg';
import bannerImg_3 from '../../public/assets/img/banner/banner-3.jpg';


function Banner() {
  return (
    <div>
        <section className="banner">
            <div className="container">

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={bannerImg_1} alt="" />
                </div>

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={bannerImg_2} alt="" />
                </div>

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={bannerImg_3} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner