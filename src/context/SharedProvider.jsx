import React, { createContext, useContext, useState } from 'react'
import Header from '../components/Header';
import Cart from '../components/Cart';
import PublicLayout from '../components/PublicLayout';



// Create context
const sharedContext = createContext();

// Hook to easily use the context in component
export const useSharedContext = () => useContext(sharedContext);

function SharedProvider({ children }) {

  const [isCartActive, setIsCartActive] = useState(false);
  const [activeIcons, setActiveIcons] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  let [countProduct, setCountProduct] = useState(0);
  const [activeIndex,setActiveIndex] = useState(0);

  const addToCart = (item) =>{
    setSelectedItems((prevItems) => [...prevItems, item]);
    console.log(selectedItems);
    setCountProduct(countProduct + 1);
    setTotalPrice(totalPrice + item.price);    
    setActiveIcons((prev)=>[...prev, item]);
  }

  const deleteItem = (item) =>{
    setCountProduct((prevCount) => prevCount - 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price)
    const updateItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
    setSelectedItems(updateItems);
    const activeIcon = activeIcons.filter((activeIcon) => activeIcon.id !== item.id);
    setActiveIcons(activeIcon);
  }
  const hadelMenItemClick = (idx) =>{
    setActiveIndex(idx);
}
  const toggleCart = ()=>{
    setIsCartActive(!isCartActive);
  }

  return (
    <sharedContext.Provider
     value={{
      activeIndex,
      hadelMenItemClick,
      addToCart,
      toggleCart,
      selectedItems,
      isCartActive,
      deleteItem,
      activeIcons,
      totalPrice,
      countProduct
      }}>
      { children }
    </sharedContext.Provider>
  )
}

export default SharedProvider