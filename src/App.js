import './App.css';
import next from './Components/Icons/Vector4.svg'
import MarketPlace from './Components/Marketplace/Index';
import AuctionsPage from './Components/AuctionsPage/Index'
import Drop from './Components/Drop/Index';
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Homepage/Index'
import { FtData } from './Components/Homepage/FeaturedData';
import FtDescription from './Components/Homepage/FtDescription';
import AuctionLive from './Components/AuctionsPage/AuctionLive';
import { AuctionsData } from './Components/AuctionsPage/AuctionsData';
import { FilterData } from './Components/Marketplace/FilterData';
import CartPage from './Components/Marketplace/CartPage';
import { useState, useEffect } from 'react';






function App() {
 const [cart, updateCart]= useState([]);
 

 const Atcart = (selected,count)=>{
  console.log(cart)
  const cartItems = {
    id: Math.floor(Math.random() * 10000) + 1,
    name: selected.name,
    creator: 'Clearamane',
    size: '200ft',
    price: selected.price,
    image: selected.image,
    amount: count,
  };
  updateCart([...cart, cartItems])
}

 useEffect(() => {
  const storedCarts = JSON.parse(localStorage.getItem('cart'));
  if (storedCarts){updateCart(storedCarts)}
}, [])

useEffect(() => {
  if(cart.length>0) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}, [cart])

const deleteItem = (index)=>{
  updateCart(cart.filter((item)=>item.id !== index))
}



  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home next={next} Nav={Nav} useNavigate={useNavigate} cart={cart}/>}/>
      <Route path='/Marketplace' element={<MarketPlace Nav={Nav} cart={cart}/>}/>
      <Route path='/AuctionsPage' element={<AuctionsPage Nav={Nav} NavLink={NavLink} useNavigate={useNavigate} AuctionsData={AuctionsData} cart={cart}/>}/>
      <Route path='/Drop' element={<Drop Nav={Nav} NavLink={NavLink} useNavigate={useNavigate} cart={cart}/>}/>
      <Route path='/market/:id' element={<FtDescription FtData={FtData} FilterData={FilterData} Atcart={Atcart} cart={cart}/>}/>
      <Route path='/auctions/live-bid/:name' element={<AuctionLive AuctionsData={AuctionsData} useNavigate={useNavigate}/>}/>
      <Route path='/market/carts' element={<CartPage cart={cart} Nav={Nav} deleteItem={deleteItem}/>}/>
    </Routes> 
    </div>
  );
}

export default App;
