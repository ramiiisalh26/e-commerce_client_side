import React, { useLayoutEffect, useState } from 'react';
import logo_black from "../../public/assets/img/logo-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping,faBars,faCircleXmark,faRightToBracket, faUserPlus} from '@fortawesome/free-solid-svg-icons'; 
import "../../public/assets/App.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSharedContext } from '../context/SharedProvider';
// fa-user-plus

function Header({totalPrice}) {

    const {toggleCart,totalPrice,countProduct,activeIndex,hadelMenItemClick} = useSharedContext();
    
    const [toggleMenu,setToggleMenu] = useState(false);

    useLayoutEffect

    function open_menu(){
        setToggleMenu(!toggleMenu);
    }
    function close_menu(){
        setToggleMenu(!toggleMenu);
    }
    return (
    <div>
        {/* <h1> {headerProps.title}</h1> */}
        <header>
            <div className="container top-nav">
                <a href="#" className="logo"><img src={logo_black} alt="" /></a>
                <form action="#" className="search">
                    <input type="search" placeholder="Search for Products...." />
                    <button type="submit">Search</button>
                </form>

                <div className="cart_header">
                    <div className="icon_cart" onClick={toggleCart}>
                        <FontAwesomeIcon className='iconShopping' icon={faBagShopping} />
                        <span className="count_item">{countProduct ? countProduct : 0}</span>
                    </div>
                    <div className="total_price">
                        <p>My Cart:</p>
                        <p className="price_cart_head">${totalPrice ? totalPrice : 0}</p>
                    </div>
                </div>
            </div>

            <nav>
                <div className="links container">
                    <FontAwesomeIcon icon={faBars} onClick={open_menu} className="btn_open_menu"/>
                    <ul id="menu" className={toggleMenu ? "active" : ""}>
                        <span onClick={close_menu} className="bg-overlay"></span>
                        <FontAwesomeIcon onClick={close_menu} icon={faCircleXmark} className='btn_close_menu'/>
                        <img className="logo_menu" src={logo_black} alt="" />
            
                        <li className={activeIndex === 0 ? 'active' : '' } onClick={(e) => hadelMenItemClick(0)}><Link to={'/'}>Home</Link></li>
                        <li className={activeIndex === 1 ? 'active' : '' } onClick={(e) => hadelMenItemClick(1)}><Link to={'/allProduct'}>All Products</Link></li>
                        <li className={activeIndex === 2 ? 'active' : '' } onClick={(e) => hadelMenItemClick(2)}><Link to={'/about_us'}>About us</Link></li>
                        <li className={activeIndex === 3 ? 'active' : '' } onClick={(e) => hadelMenItemClick(3)}><Link to={'/contact_us'}>Contact</Link></li>
                    </ul>
                    <div className="loging_signup">
                        <Link to="/login">Login <FontAwesomeIcon icon={faRightToBracket}/></Link>
                        <Link to="/register">Sign up <FontAwesomeIcon icon={faUserPlus} /> </Link>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header