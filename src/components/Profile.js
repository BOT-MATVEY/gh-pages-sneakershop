import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import axios from 'axios';
import PopUp from "./PopUp";
import ProfileOrders from "./ProfileOrders";




function Profile() {

    const [UserOrders, setUserOrders] = React.useState([]);

    const loadUserOrder = async ()=> {
        await axios.get("https://62e78f4893938a545bd40b40.mockapi.io/Orders").then(json => setUserOrders(json.data));
           console.log(UserOrders);
           
         }

         React.useEffect ( () => loadUserOrder,[]) 

    return (

        <div className="content">

            <div className='HeaderOfProducts'>
                <h1>Мои заказы</h1>
            </div>
          
            <div>
            
                
                {UserOrders.length !== 0 ? 
                    <ProfileOrders UserOrders ={UserOrders}/> : 
                        <div>"тут ничего нет"</div> }
            </div>
        </div>
    )
}

export default Profile