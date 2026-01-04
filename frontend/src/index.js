import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';

import HomePage from './landing-page/home/HomePage';
import SignUp from './landing-page/signup/SignUp';
import Home from './landing-page/signup/Home';
import Login from './landing-page/signup/Login';
import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/products/ProductPage';
import PricingPage from './landing-page/pricing/PricingPage';
import SupportPage from './landing-page/support/SupportPage'
import NotFound from './landing-page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);