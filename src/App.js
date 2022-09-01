import './App.css';
import React from 'react';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';
import AppContext from './components/Context/AppContext';
import Home from './components/Home';
import Favorites from './components/Favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';


 


function App() {
  const [items, setItems] = React.useState([]);
  
  const [cartItems, setCartItems] = React.useState([]);
  const [isFavorited, setFavorited] = React.useState(false);
  const [favoriteItems, setFavoriteItems] = React.useState([]);


  const CartSum = (() => { 
    const CartItemsPriceArray =[];
    cartItems.map(item => CartItemsPriceArray.push(item.SneakerPrice))
      return (CartItemsPriceArray.reduce((price1, price2) => price1 + price2, 0))
    })(); // iife to get sum of all items in Cart on every App rerender 

  const handleFavoritedAdd = (item) => {
      axios.post("https://62e78f4893938a545bd40b40.mockapi.io/FavoriteItems", item)
      setFavoriteItems(prev => [...prev, item])
  }

  const handleFavoritedRemove = item => {
      const sameFavoriteItems = favoriteItems.filter(favoriteItem => favoriteItem.SneakerName == item.SneakerName);

      sameFavoriteItems.map(favoriteItem =>  axios.delete(`https://62e78f4893938a545bd40b40.mockapi.io/FavoriteItems/${favoriteItem.id}`)); // delete by id
      
      setFavoriteItems(prev => prev.filter(favoriteItem => favoriteItem.SneakerName !== item.SneakerName))
  }

  const onClickPlus = (item) => {
    setCartItems(prev => [...prev, item])
    axios.post("https://62e78f4893938a545bd40b40.mockapi.io/cart", item)
  }

  const handleIsItemAdded = (item) => {
    return cartItems.some(CartItem => CartItem.SneakerName == item.SneakerName) ? true : false;
  }
  

  const removeItemFromCart = (item) => {
      const sameCartItems = cartItems.filter(CartItem => CartItem.SneakerName == item.SneakerName);
      // sameCartItems.map(item2 => console.log("item id:" + item2.id)) //find all Sneakers with the same name to delete them by ID
      sameCartItems.map(CartItem =>  axios.delete(`https://62e78f4893938a545bd40b40.mockapi.io/cart/${CartItem.id}`)); // delete by id
      setCartItems(prev => prev.filter(CartItem => CartItem.SneakerName !== item.SneakerName))

  }

 
  const LoadDataFromDB = async () => {
    await axios.get("https://62e78f4893938a545bd40b40.mockapi.io/FavoriteItems")
      .then((json) => setFavoriteItems(json.data))
    await axios.get("https://62e78f4893938a545bd40b40.mockapi.io/cart")
      .then((json) => setCartItems(json.data))
    await axios.get("https://62e78f4893938a545bd40b40.mockapi.io/Products")
      .then((json => setItems(json.data) ))


      
  }

  React.useEffect(() => {
    
    LoadDataFromDB();

    },[])   //.then( (json) => console.log(json.data))
  

  return (
    
    <AppContext.Provider value={{
      items,
      cartItems,
      favoriteItems,
      CartSum,
      onClickPlus,
      removeItemFromCart,
      handleIsItemAdded,
      handleFavoritedRemove,
      handleFavoritedAdd}}>

      <BrowserRouter>
        <div className='Background'>
          <div className="PlaceHolder">
             
   
          <Header/>

          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          {/* <Route path="*" element {<Page404/>}> */}
          <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
        </div>  
      </BrowserRouter>
      
    </AppContext.Provider>
    
    
  );
}

export default App;
