import React, { useState,useEffect,useRef } from 'react'
import { Outlet, Route, Router } from 'react-router-dom';
import Header from './Header';
import Cart from './Cart';
import Slider from './Slider';
import Features from './Features';
import Banner from './Banner';
import Slide_sale from './Slide_sale';
import Banner_big from './Banner_big';
import Slide_product from './Slide_product';
import Banner_three from './Banner_three';
import News_letter from './News_letter';
import Back_to_top from './Back_to_top';
import Footer from './Footer';
import Slide_product_2 from './Slide_product_2';
import itemsJson from "../data/items.json";


function PublicLayout() {
  
  const [items,setItems] = useState([]);

  useEffect(()=>{
    setItems(itemsJson);
  },[])


  return (
      <div>
          {/* Pass the openCart function as a prop */}
          <Header 
            // totalPrice={totalPrice} 
            // count={count} 
          />
          <Cart 
            // selectedItem={selectedItems}
            // count={count}
            // totalPrice={totalPrice} 
            // deleteItem={(item) => deleteItem(item)}
          />
          <Slider />
          <Features />
          <Banner />
          <Slide_sale items={items}
            // addToCart={(selectedItems) => addToCart(selectedItems)}
            // activeIcons={activeIcons}
            />
          <Banner_big />
          <Slide_product items={items}
          //  addToCart={(selectedItems) => addToCart(selectedItems)}
          //  activeIcons={activeIcons}
          />
          <Slide_product_2 items={items}
          //  addToCart={(selectedItems) => addToCart(selectedItems)}
          //  activeIcons={activeIcons} 
           />
          <Banner_three />
          <News_letter />
          <Back_to_top />
          <Footer />
      </div>
  )
}

export default PublicLayout