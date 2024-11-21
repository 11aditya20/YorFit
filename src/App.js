import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import CustomClothes from './components/CustomClothes';
import ShopCategory from './components/ShopCategory';
import RemakesReturns from './components/RemakesReturns';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import GetFit from './components/GetFit';
import ProductDetails from './components/ProductDetails';
import Men from './components/Men';
import Women from './components/Women';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CustomClothes />
                <ShopCategory />
                <RemakesReturns />
                {/* <TopSellers /> */}
                <Testimonials />
                <FAQ />
              </>
            }
          />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/getfit" element={<GetFit />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
