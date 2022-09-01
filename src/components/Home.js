import React from "react"
import AppContext from "./Context/AppContext"
import ProductTable from "./ProductTable"

function Home() {
    const Context = React.useContext(AppContext)
    const [SearchValue, setSearchValue] = React.useState('');
    const items = Context.items.filter((sneaker) => sneaker.SneakerName.toLowerCase().includes(SearchValue.toLowerCase()));
    const HandleSearch = (event) => {
        setSearchValue(event.target.value);
      }

    return (
         
    <div className="content">
        <div className='HeaderOfProducts'>
        <h1>{SearchValue ? `Поиск по запросу: ${SearchValue}` : "Все кроссовки"}</h1>
        <div className="SearchBlock">
        <img width={18} height={18} src="images/Search-icon.svg"/>
            
            <input onChange={HandleSearch } value={SearchValue} placeholder='Поиск...'/>
        </div>
        </div>
        <ProductTable 
        SearchValue = {SearchValue}
        items={items}/>
    </div>

    )
}

export default Home;


