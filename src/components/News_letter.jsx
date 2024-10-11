import React from 'react';
import "../../public/assets/App.css";
import email_icon from "../../public/assets/img/icon_email.png";
function News_letter() {
  return (
    <div>
        <div className="news_letter">
        <div className="container">
            <div className="text">
                <img src={email_icon} alt="" />
                <div className="content">
                    <h4>sign up to newsletter</h4>
                    <p>Get email updates about our latest shop....and receive</p>
                    <h6>$30 Coupon For First Shoppig</h6>
                </div>
            </div>

            <form action="" className="newsletter_form">
                <input type="email" placeholder="Enter your email here..." />
                <button type="submit">subscribe</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default News_letter