import React from 'react';
import "../../public/assets/App.css";
import logo_white from "../../public/assets/img/logo-white.png";
import payment_logo_1 from "../../public/assets/img/payment-1.png";
import payment_logo_2 from "../../public/assets/img/payment-2.png";
import payment_logo_3 from "../../public/assets/img/payment-3.png";
import payment_logo_4 from "../../public/assets/img/payment-4.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="big_row">
            <img src={logo_white} alt="" />
            <div className="hotline">
              <i className="fa-solid fa-headset"></i>
              <div className="text">
                <h5>Hotline Free 24/24:</h5>
                <h6>(+02) 011 2616 7002</h6>
              </div>
            </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam, ad error possimus distinctio ducimus aperiam nisi rerum, quae aliquid et laudantium saepe velit totam earum fuga minima. Enim, et!</p>
          </div>
          <div className="row">
              <h4>FAQs & Help</h4>

              <div className="links">
                <a href="">F.A.Q</a>
                <a href="">Ordering Tracking</a>
                <a href="">Contacts</a>
                <a href="">Events</a>
                <a href="">Help Center</a>
              </div>
          </div>

          <div className="row">
            <h4>Shipping & Delivery</h4>
            <div className="links">
              <a href="">Delivery Information</a>
              <a href="">Discount</a>
              <a href="">Payment & Shipping</a>
              <a href="">Estimated Delivery Time</a>
              <a href="">Shipping Guide</a>
            </div>
          </div>

          <div className="row">
            <h4>Information</h4>
            <div className="links">
              <a href="">Popular</a>
              <a href="">Our Services</a>
              <a href="">Your Account</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms & Condition</a>
            </div>
          </div>

        </div>

        <div className="bottom_footer">
          <div className="container">
            <p>Copyright &copy; <span>Topico.</span>all rights reserved</p>
            <div className="payment_img">
              <img src={payment_logo_1} alt="" />
              <img src={payment_logo_2} alt="" />
              <img src={payment_logo_3} alt="" />
              <img src={payment_logo_4} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer