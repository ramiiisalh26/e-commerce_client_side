import React from 'react';
import "../../public/assets/App.css";
import banner_4 from '../../public/assets/img/banner/banner-4.jpg';
import banner_5 from '../../public/assets/img/banner/banner-5.jpg';

function Banner_big() {
  return (
    <div>
        <section className="banner banner_big">
            <div className="container">

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={banner_4} alt="" />
                </div>

                <div className="banner_img">
                    <div className="glass_hover"></div>
                    <a href="#"></a>
                    <img src={banner_5} alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner_big