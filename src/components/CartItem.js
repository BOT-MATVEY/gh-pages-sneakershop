import React from "react";
import AppContext from '../components/Context/AppContext';
import ProductCard from "./ProductCard";

function CartItem({SneakerName, SneakerPrice, ImageUrl, id}) {


  const Context = React.useContext(AppContext);
  const onClickRemove = () => {
    Context.removeItemFromCart({ImageUrl, SneakerPrice, SneakerName, id})
  }


  const EditedPrice = SneakerPrice.toLocaleString();

  return(
  <div className= "CartItem">
    <div style={{backgroundImage: `url(${ImageUrl})`}} className="CartItemImage"/>
    <div className='CartItemNameAndPrice'>
      <p>{SneakerName}</p>
      <b>{EditedPrice + " руб."}</b>
    </div>
    <img className="CartItemButton" onClick={onClickRemove}src='images/btn-remove.svg'/>
  </div>
  )
}

export default CartItem;