import React from 'react'
import ProductCard from './ProductCard';
import AppContext from './Context/AppContext';
import SkeletonProductCard from './SkeletonProductCard'

function ProductTable({SearchValue, items}) {

    const Context = React.useContext(AppContext);
    const cartItems = Context.cartItems;
    const favoriteItems = Context.favoriteItems;
    const onClickPlus = Context.onClickPlus;
    const removeItemFromCart = Context.removeItemFromCart;
    
    const handleFavoritedAdd = Context.handleFavoritedAdd;
    const handleFavoritedRemove = Context.handleFavoritedRemove;



    return (
        
        <div  className='ProductTable'>
            
              {items.length !== 0 ? 
                items.map((obj)=><ProductCard 
                                        key={obj.id}
                                        id={obj.id}
                                        SneakerName={obj.SneakerName}
                                        SneakerPrice={obj.SneakerPrice}
                                        ImageUrl={obj.ImageUrl}
                                        
                                        onPlus={onClickPlus} //Add to cart
                                        handleRemoveFromCart={removeItemFromCart} //Remove from cart
                                        isAddedToCart={cartItems.some(item => item.SneakerName == obj.SneakerName) ? false : true}
                                        isAddedtoFavorites ={favoriteItems.some(item => item.SneakerName == obj.SneakerName) ? true : false }
                                        handleFavoritedRemove ={handleFavoritedRemove}
                                        handleFavoritedAdd={handleFavoritedAdd}

                />) : [...Array(7)].map(obj => <SkeletonProductCard style={{
                    display:"flex",
                    position:"relative",
                    margin:"auto",
                    alignItems:"center"
                }}/>)}
            </div>
    )
}

export default ProductTable;