import React, { useState } from 'react';

import Header from './Header';
import Showbar from './Showbar';
import Offer from './Offer';
import Navbar from './Navbar';
import Sell from './Sell';
import Mobiles from './Mobiles';
import Say from './Say';
import HeadphonesHome from './HeadphonesHome';
import Headphones from './Headphones';
import Pdeal from './Pdeal';
import Sbrand from './Sbrand';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ExploreXhb from './ExploreXhb';
import Brand from './Brand';
import Review from './Review';
import FindUs from './Findus';
import Smartphone from './Smartphone';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import AirPods from './AirPods';
import SmartWatches from './SmartWatches';
import PowerBanks from './PowerBanks';
import DataCables from './DataCables';
import Speakers from './Speakers';
import Tablets from './Tablets';
import Chargers from './Chargers';
import CartDrawer from './CartDrawer';










function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.detail === product.detail);
      if (existing) {
        return prev.map(item => item.detail === product.detail ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, id: Date.now().toString() + Math.random().toString(36).substr(2, 5), quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  return (
    <>
   
<BrowserRouter>
      <Header cart={cart} setIsCartOpen={setIsCartOpen} />
      <Navbar/>
<Routes>
  <Route path='/' element={
    <> 
      <Showbar/>
       <Offer/>
       <Sell onAddToCart={handleAddToCart} />
       <Say/>
      <Mobiles onAddToCart={handleAddToCart} />
      <HeadphonesHome onAddToCart={handleAddToCart} />
       <Pdeal/>  
      <Sbrand/>
</>

  }/>
  <Route path='/smartphones' element={<Smartphone onAddToCart={handleAddToCart} />}/>
  <Route path='/airpods' element={<AirPods onAddToCart={handleAddToCart} />}/>
  <Route path='/smartwatches' element={<SmartWatches onAddToCart={handleAddToCart} />}/>
  <Route path='/powerbanks' element={<PowerBanks onAddToCart={handleAddToCart} />}/>
  <Route path='/datacables' element={<DataCables onAddToCart={handleAddToCart} />}/>
  <Route path='/headphones' element={<Headphones onAddToCart={handleAddToCart} />}/>
  <Route path='/speakers' element={<Speakers onAddToCart={handleAddToCart} />}/>
  <Route path='/tablets' element={<Tablets onAddToCart={handleAddToCart} />}/>
  <Route path='/chargers' element={<Chargers onAddToCart={handleAddToCart} />}/>
  <Route path='/explorexhb' element={<ExploreXhb onAddToCart={handleAddToCart} />}/>
  <Route path='/brand' element={<Brand/>}/>
  <Route path='/review' element={<Review/>}/>
  <Route path='/findus' element={<FindUs/>}/>
  <Route path='/smart' element={<Smartphone onAddToCart={handleAddToCart} />}/>
  <Route path='/log' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  

  

</Routes>
<Footer/>

<CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart} 
          setCart={setCart} 
        />
</BrowserRouter>

            

      

 
    </>
  );
}

export default App;
