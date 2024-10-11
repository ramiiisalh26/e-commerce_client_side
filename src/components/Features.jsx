import React from 'react';
import "../../public/assets/App.css";
import feature_1 from "../../public/assets/img/features1.png";
import feature_2 from "../../public/assets/img/features2.png";
import feature_3 from "../../public/assets/img/features3.png";
import feature_4 from "../../public/assets/img/features4.png";
import feature_5 from "../../public/assets/img/features5.png";

function Features() {
  return (
    <div>
        <section className="features">
            <div className="container">
                <div className="feature_item">
                    <img src={feature_1} alt="" />
                    <div className="text">
                        <h4>Free Shippig</h4>
                        <p>Free Shippig on All Order</p>
                    </div>
                </div>

                <div className="feature_item">
                    <img src={feature_2} alt="" />
                    <div className="text">
                        <h4>Free Shippig</h4>
                        <p>Free Shippig on All Order</p>
                    </div>
                </div>

                <div className="feature_item">
                    <img src={feature_3} alt="" />
                    <div className="text">
                        <h4>Free Shippig</h4>
                        <p>Free Shippig on All Order</p>
                    </div>
                </div>

                <div className="feature_item">
                    <img src={feature_4} alt="" />
                    <div className="text">
                        <h4>Free Shippig</h4>
                        <p>Free Shippig on All Order</p>
                    </div>
                </div>

                <div className="feature_item">
                    <img src={feature_5} alt="" />
                    <div className="text">
                        <h4>Free Shippig</h4>
                        <p>Free Shippig on All Order</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features