import React from 'react'
import "../../public/assets/App.css";
import banner_6 from "../../public//assets/img/banner/banner-6.jpg";
import banner_7 from "../../public/assets/img/banner/banner-7.jpg";
import banner_8 from "../../public/assets/img/banner/banner-8.jpg";

function Banner_three() {
  return (
    <div>
        <section className="banner">
            <div className="container">

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={banner_6} alt="" />
                </div>

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={banner_7} alt="" />
                </div>

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={banner_8} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner_three