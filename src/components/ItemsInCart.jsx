import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSharedContext } from '../context/SharedProvider';

function ItemsInCart(){
    const {selectedItems,deleteItem} = useSharedContext() 
    // console.log(items);
    // function deleteItem(id){

    // }
  return (
    
    <div>
        {
            selectedItems.length > 0 ? (
                selectedItems.map(item => (
                    <div className="item_cart" key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="content">
                            <h4>{item.name}</h4>
                            <p className="price_cart">${item.price}</p>
                        </div>
                        {/* Delete Icon */}
                        <button className="delete_item" onClick={() => deleteItem(item)}><FontAwesomeIcon className='trashIcon' icon={faTrashCan} /></button>
                    </div>
                ))
            ) : (
                <p></p>
            )
        }
    </div>
  );
}

export default ItemsInCart