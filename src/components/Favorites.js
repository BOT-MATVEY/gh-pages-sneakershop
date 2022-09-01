import React from "react"
import { Link } from "react-router-dom";
import AppContext from "./Context/AppContext"
import ProductTable from "./ProductTable"

function Favorites() {
    const Context = React.useContext(AppContext)
    const items = Context.favoriteItems;



    return (
         
    <div className="content">
        <div className='HeaderOfProducts'>
        <h1>Избранное</h1>
        </div>
        {items.length == 0 ? 
        <div className="NothingHere">
            <p>Тут ничего нет</p>
            <p>😞</p>
            <Link to="/">
                <button className="OrderButton">Вернуться к покупкам</button> 
            </Link>
        </div> 
        : <ProductTable items={items}/>}
        
        
    </div>

    )
}

export default Favorites;










