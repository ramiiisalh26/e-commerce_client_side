import React from 'react'
import "../../public/assets/App.css";
function Back_to_top() {
  function backToTop(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  return (
    <div>
        <div onClick={backToTop} className="back_to_top">
            <p>back to top</p>
        </div>
    </div>
  )
}

export default Back_to_top