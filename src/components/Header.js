import React, { useContext } from "react";
import {NavLink} from 'react-router-dom';
import AppContext from "./Context/AppContext";
import Drawer from "./Drawer"

function Header() {
  const Context = React.useContext(AppContext);
  const CartSum = Context.CartSum;
  const cartItems = Context.cartItems;
  const removeItemFromCart = Context.removeItemFromCart;
  
  const [cartIsVisible, setCartIsVisible] = React.useState(false);
  const [cartAnimation, setCartAnimation] = React.useState(false);



  const onClickCartAndPrice = async () => {
    await setCartIsVisible(true);
    await setTimeout(() => setCartAnimation(true), 0)
    


  }

  const onClickCloseCart = async() => {
     setCartAnimation(false)
    await setTimeout(() => setCartIsVisible(false), 350)
    
    

  }

  
    return (
        <header>

          {cartIsVisible && <Drawer cartAnimation={cartAnimation} items={cartItems} onClickCloseCart={onClickCloseCart} onClickRemoveCartItem={removeItemFromCart}/>}
          
        <div className="HeaderLeft">
          <img width={40} height={40} src="images/logo.png" className='logo'/> 
          
          <NavLink to="/" 
            style={{ 
              textDecoration: 'none',
              color:"inherit" }}>
            <div className='HeaderLeftInfo'>
              <h2>BEST SNEAKER SHOP</h2>
              <p>Лучший магазин</p>
          </div>
          </NavLink>
        </div>
        <ul>
          <li className='cartAndPrice' onClick={onClickCartAndPrice}>
            <img width={18} height={18} src="images/Cart.svg"/>
            <span style={CartSum == 0 ? {opacity:"0.5"} : {} }>{CartSum.toLocaleString() + " руб."}</span>
          </li>
          <li>
            <NavLink to="/favorites">
          <img width={18} height={18} className="NavIcon" src="images/Heart.svg"/>
            </NavLink>
            <NavLink to="profile">
              <img width={18} height={18} className="NavIcon" src="images/User.svg"/>
            </NavLink>
          
          </li>
        </ul>
      </header>
    )
}

export default Header;