import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import axios from 'axios';
import PopUp from "./PopUp";


function ProfileOrders({UserOrders}) {

    const CartSum = React.useContext(AppContext).CartSum;
    const cartItems = React.useContext(AppContext).cartItems
    const [IsPopUpVisible, setIsPopUpVisible] = React.useState(false)
    const [PopUpOrderObject, setPopUpOrderObject] = React.useState('')
    
    const openPopUp = (order) => {
        setIsPopUpVisible(true)
        setPopUpOrderObject(order)
    }

    const closePopUp = () => {

        console.log("closed")
        setIsPopUpVisible(false)
        
    }
    
    
    const Context = React.useContext(AppContext);
    

   
    
       


    return (
        <div>
        {UserOrders.map(order => 
            <div>
            <ul onClick={() => openPopUp(order)} className="orderBorder" key={order.id}>
                 <li>
                     <span className="mainText" > заказ #{order.id}</span> <span className="PriceText">ЦЕНА: {order.SumPrice.toLocaleString()} руб.</span>
                 </li>
             </ul>
             </div> 
         )}
         {IsPopUpVisible &&  
         <PopUp 
            onClickClosePopUp={closePopUp} 
            order={PopUpOrderObject}/>}

         </div>

    )
}

export default ProfileOrders; 
    