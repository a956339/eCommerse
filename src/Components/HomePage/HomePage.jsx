import React from 'react';
import './HomePage.css';
import Banner from '../HomePage/SubComponent/Banner/Banner.jsx';
import Flash from './SubComponent/FlashSection/Flash.jsx';
import CatogaryList from './SubComponent/Catogary/CatogaryList.jsx';
import Selling from './SubComponent/Best-selling-product/Selling.jsx';
import Banner2 from './SubComponent/Banner2/Banner2.jsx';
import Expproduct from './SubComponent/ProductExplore/Expproduct.jsx';
import NewArival from './SubComponent/ProductExplore/NewArrival/NewArival.jsx';
import Services from './SubComponent/Services/Services.jsx';



const HomePage = () => {
  return (
    <div className="main_body_container">
    <Banner />
    <Flash />
    <CatogaryList />
    <Selling />
   <Banner2 />
   <Expproduct />
   <NewArival />
   <Services />
    </div>
  );
}

export default HomePage;
