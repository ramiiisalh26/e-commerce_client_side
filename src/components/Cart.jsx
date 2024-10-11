import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'; 
import "../../public/assets/App.css";
import ItemsInCart from './ItemsInCart';
import { useSharedContext } from '../context/SharedProvider';


function Cart() {

    const {toggleCart,isCartActive,selectedItems,countProduct,totalPrice,deleteItem} = useSharedContext(); 

  return (  
    <div>
        <div className={`cart ${isCartActive ? 'active' : ''}`}>
            <span className=".bg-overlay"></span>
            <div className="top_cart">
                <h3>My Cart <span id="innerItemCart"> ({countProduct ? countProduct : 0} Item in cart)</span></h3>
                <span className="close_cart" onClick={toggleCart}><FontAwesomeIcon className="XmarkIcon" icon={faCircleXmark} /></span>
            </div>

            <div className="items_in_cart">
                {isCartActive && <ItemsInCart selectedItems={selectedItems} deleteItem={deleteItem} />}
            </div>

            <div className="bottom_cart">
                <div className="total">
                    <p>Cart subtotal</p>
                    <p className="price_cart_total">${totalPrice ? totalPrice : 0}</p>
                </div>
                <div className="button_cart">
                    <a href="checkout.html" className="btn_cart">Proceed to checkout</a>
                    <button className="btn_cart trans_bg">Shop more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart