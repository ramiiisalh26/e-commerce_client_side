import React, { useEffect, useState } from 'react'
import "../../public/assets/App.css";
import Cart from './Cart'
import Back_to_top from './Back_to_top'
import Footer from './Footer'
import Header from './Header'
import itemsJson from "../data/items.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faHeart,faShare,faStar } from '@fortawesome/free-solid-svg-icons';

import { json } from 'react-router-dom'
import { useSharedContext } from '../context/SharedProvider';

function AllProduct() {

    const {addToCart,activeIcons} = useSharedContext();
    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems(itemsJson);
    },[])
    
  return (
    <div>
        <Header />
        
        <Cart />
        
        <div className="top_page">
        <div className="container">
            <h1>Experience the Future of Technology with Our Topico.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero ipsum reprehenderit quaerat ullam voluptatem,
                ex ipsam nobis sunt inventore Vero ipsum reprehenderit quaerat ullam voluptatem.
            </p>
        </div>
        </div>

        <section className="all_products">
            <div className="container">
                {/* <span className="btn_filter" onclick={open_close_filter}>Filter <i className="fa-solid fa-filter"></i></span> */}
                <div className="filter">
                    <h2>filter</h2>
                    
                    <div className="filter_item">
                        <h4>Categorie</h4>
                        <div className="content">
                            <div className="item">
                                <span>Phone</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>Tables</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>Electronics</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>TV</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>Head Phone</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>Watches</span>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>

                    <div className="filter_item">
                        <h4>Brand</h4>
                        <div className="content">
                            <div className="item">
                                <span>Apple</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>Samsung</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>Intel</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>OPPO</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>xiaomi</span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span>huwui</span>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <div className="filter_item">
                        <h4>color</h4>
                        <div className="content">
                            <div className="item">
                                <span className="color"></span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span className="color"></span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span className="color"></span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span className="color"></span>
                                <input type="checkbox" />
                            </div>
                            <div className="item">
                                <span className="color"></span>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="products_dev" className="products_dev">
                    {
                        items.map(product => {
                    
                            const persent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
                    
                            return(   
                                <div key={product.id} className="product swiper-slide">
                                    <div className="icons">
                                        <span><FontAwesomeIcon onClick={() => addToCart(product)} icon={faCartPlus} className={`slideIcon ${activeIcons.includes(product) ? "active" : ''}`} /></span> 
                                        <span><FontAwesomeIcon icon={faHeart} className={`slideIcon`} /></span> 
                                        <span><FontAwesomeIcon icon={faShare} className={`slideIcon`} /></span> 
                                    </div>
                                    {product.old_price && <span className="sale_persent">%${persent_disc}</span>}
                                    <div className="img_product">
                                        <img src={product.img} alt="" />
                                        <img src={product.img_hover} className="img_hover" alt="" />
                                    </div>
                                    <h3 className="name_product">
                                        <a href="productItemPage.html?productId=${product.id}" >{product.name}</a>
                                    </h3>
                                    <div className="stars">
                                        <FontAwesomeIcon icon={faStar} className='star' />
                                        <FontAwesomeIcon icon={faStar} className='star' />
                                        <FontAwesomeIcon icon={faStar} className='star' />
                                        <FontAwesomeIcon icon={faStar} className='star' />
                                        <FontAwesomeIcon icon={faStar} className='star' />
                                    </div>
                                    <div className="price">
                                        <p><span>{product.price}</span></p>
                                        {product.old_price && <p className="old_price">${product.old_price}</p>}
                                    </div>
                                </div>
                            );
                            
                        })
                    }
                </div>

            </div>
            <div className="pagination">
                <span className="btn_page_prev"><i className="fa-solid fa-backward-step"></i></span>
                
                <a href=""><span className="num_page active">1</span></a>
                <a href=""><span className="num_page">2</span></a>
                <a href=""><span className="num_page">3</span></a>
                <span className="btn_page_prev"><i className="fa-solid fa-forward-step"></i></span>
            </div>
        </section>

        <Back_to_top />

        <Footer />
    </div>
  )
}

export default AllProduct