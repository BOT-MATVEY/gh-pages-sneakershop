import React, { useEffect } from "react";
import AppContext from "./Context/AppContext";
import CartItem from "./CartItem"
// import MadeOrder from "./MadeOrder"
import axios from "axios";

function Drawer({onClickCloseCart, items, onClickRemoveCartItem, cartAnimation}) {
  const CartSum = React.useContext(AppContext).CartSum;
  const cartItems = React.useContext(AppContext).cartItems
  const [orderIsMade, setOrderIsMade] = React.useState(false)
  const UserOrder = {
    SumPrice: React.useContext(AppContext).CartSum,
    OrderItems: cartItems
}

  const handleOrder = () => {
    console.log("Order is posted")
    axios.post("https://62e78f4893938a545bd40b40.mockapi.io/Orders", UserOrder)
    
  }


    
  
  return(
      <div className="drawer">
        <div className={cartAnimation ? "drawerOverlay cartIsVisible" : "cartIsNotVisible" } onClick={onClickCloseCart}></div>
        <div className={cartAnimation ? "drawerCart cartIsVisible" : "drawerCart cartIsNotVisible"}>
          <h2>
            Корзина
            <img className='CartItemButton' onClick={onClickCloseCart} src='images/btn-remove.svg'/>
            </h2>
    
          <div className='items'>          
              {items.map((obj) => 
                <CartItem 
                  key={obj.id}
                  id={obj.id}
                  SneakerName={obj.SneakerName}
                  SneakerPrice={obj.SneakerPrice}
                  ImageUrl={obj.ImageUrl}
                  onClickRemoveBtn={onClickRemoveCartItem}/>)}
          </div>
          
            <div className='CartInfo'>
              
              <div className='PriceLine'>
                <span>Цена:</span>
                <span className='DashLine'/>
                <b>{CartSum + " руб."}</b>
              </div>

              <div className='PriceLine'>
                <span> В т.ч. НДС 20%:</span>
                
                <div className='DashLine'/>
                  <b>{(CartSum * 0.2).toFixed(2) + " руб."}</b>
                </div>

                <button className='OrderButton' onClick={handleOrder}>Оформить заказ <img src='images/arrow.svg'/></button>
              </div>   

            </div>
      </div>
    )
}

export default Drawer;