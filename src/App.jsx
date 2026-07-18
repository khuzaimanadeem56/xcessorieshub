import React from 'react';

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










function App() {
  return (
    <>
   
<BrowserRouter>
      <Header />
      <Navbar/>
<Routes>
  <Route path='/' element={
    <> 
      <Showbar/>
       <Offer/>
       <Sell/>
       <Say/>
      <Mobiles/>
      <HeadphonesHome/>
       <Pdeal/>  
      <Sbrand/>
</>

  }/>
  <Route path='/smartphones' element={<Smartphone/>}/>
  <Route path='/airpods' element={<AirPods/>}/>
  <Route path='/smartwatches' element={<SmartWatches/>}/>
  <Route path='/powerbanks' element={<PowerBanks/>}/>
  <Route path='/datacables' element={<DataCables/>}/>
  <Route path='/headphones' element={<Headphones/>}/>
  <Route path='/speakers' element={<Speakers/>}/>
  <Route path='/tablets' element={<Tablets/>}/>
  <Route path='/chargers' element={<Chargers/>}/>
  <Route path='/explorexhb' element={<ExploreXhb/>}/>
  <Route path='/brand' element={<Brand/>}/>
  <Route path='/review' element={<Review/>}/>
  <Route path='/findus' element={<FindUs/>}/>
  <Route path='/smart' element={<Smartphone/>}/>
  <Route path='log' element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
  

  

</Routes>
<Footer/>

</BrowserRouter>

            

      

 
    </>
  );
}

export default App;
