import React, { useState, useContext} from "react";
import AppContext from "./Context/AppContext";




function ProductCard({
  ImageUrl, 
  SneakerPrice, 
  SneakerName, 
  id, 
  onPlus, 
  handleRemoveFromCart, 
  // isAddedToCart,
  isAddedtoFavorites,
  handleFavoritedRemove,
  handleFavoritedAdd
}) {

  // console.log(SneakerName + "Is rerendered")

  const isAddedToCart = React.useContext(AppContext).handleIsItemAdded;

  const added = isAddedToCart({SneakerName});
  // const [isAdded, setIsAdded] = React.useState(true);
  const[isFavorited, setIsFavorited] = React.useState(false)


  

  
  const onClickplus= () => {
    onPlus({SneakerName, SneakerPrice, ImageUrl, id});
    // setIsAdded(!isAdded)

    console.log("clicked: onCLickPlus ")
  }
  const onClickRemoveFromCart = () => {
    console.log("Product Card id = " + id)
    handleRemoveFromCart({SneakerName, SneakerPrice, ImageUrl, id})
    // setIsAdded(!isAdded)
  }

  const onClickFavorite= () => {
    setIsFavorited(true);
    handleFavoritedAdd({SneakerName, SneakerPrice, ImageUrl, id});
  }

  const onClickRemoveFromFavorited = () => {
    setIsFavorited(false)
    handleFavoritedRemove({SneakerName, SneakerPrice, ImageUrl, id})
  }

  React.useEffect(() => {
    // setIsAdded(isAdded)
    setIsFavorited(isAddedtoFavorites)
  },[])



  return(
        <div className='ProductCard'>
            <div className="leftCornered">
            <img width={32} height={32} onClick={isFavorited ? onClickRemoveFromFavorited : onClickFavorite } src={isFavorited ? "images/btnFavoriteOn.png" : "images/btnFavoriteOff.png"}/>
            </div>
            <img width={135} height={110} className='SneakersImage' src={ImageUrl}/>
            <h3>{SneakerName}</h3>
            <div className="PriceAndAddButton">
              <div>
                <p className='PriceText'>ЦЕНА:</p>
                <p className="PriceSum">{SneakerPrice.toLocaleString() + " руб."}</p>
              </div> 
              <div>
                <img width={32} height={32} 
                  onClick={added ? onClickRemoveFromCart : onClickplus  } 
                  src={added ? "images/btnAddedToCart.svg" : "images/plus.png" }/>
              </div>
            </div>  
          </div>
    )
}

export default ProductCard;