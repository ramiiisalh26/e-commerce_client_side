import React from 'react'
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons'; 
import about_img from '../../public/assets/img/about_us.jpg';

function About_us() {
  return (
    <div>
        <Header />
        <Cart />
        <section className='about_section'>
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eos doloremque accusantium explicabo quod quidem dolores,
                            ratione voluptatem  sunt, totam nemo aut delectus numquam exercitationem pariatur id fuga doloribus aspernatur neque!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Asperiores sunt repellat deleniti voluptas obcaecati non? Provident magnam atque placeat commodi neque.
                            In, temporibus ex nobis eos quis fuga cumque placeat.
                        </p>
                        <div className="button">
                            <Link className='link' to={""}>Read More</Link>
                        </div>
                    </div>
                    <div className="social">
                        <Link to={""}><FontAwesomeIcon className="socialIcon" icon={faFacebook}/></Link>
                        <Link to={""}><FontAwesomeIcon className="socialIcon" icon={faInstagram}/></Link> 
                        <Link to={""}><FontAwesomeIcon className="socialIcon" icon={faTwitter}/></Link>
                    </div>
                </div>
                <div className='image-section'>
                    <img src={about_img} alt="" />
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default About_us