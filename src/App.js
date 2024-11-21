import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/AuthContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from './components/Header';
import Hero from './components/Hero';
import CustomClothes from './components/CustomClothes';
import ShopCategory from './components/ShopCategory';
import RemakesReturns from './components/RemakesReturns';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppWithAuth />
      </AuthProvider>
    </Router>
  );
}

function AppWithAuth() {
  const { isAuthenticated } = useAuth(); // Access authentication status
  const [isSignUp, setIsSignUp] = useState(false); // Manage which page is displayed (SignIn or SignUp)

  const toggleSignInSignUp = () => {
    setIsSignUp(!isSignUp); // Toggle between SignIn and SignUp
  };

  return (
    <div className="App">
      {isAuthenticated && <Header />} {/* Only show Header if authenticated */}

      <Routes>
        <Route
          path="/"
          element={isSignUp ? (
            <SignUp onSwitch={toggleSignInSignUp} /> // Show SignUp if isSignUp is true
          ) : (
            <SignIn onSwitch={toggleSignInSignUp} /> // Show SignIn if isSignUp is false
          )}
        />
        <Route
          path="/landing"
          element={
            isAuthenticated ? (
              <>
                <Hero />
                <RemakesReturns />
                <Testimonials />
                <CustomClothes />
                <ShopCategory />
                <FAQ />
              </>
            ) : (
              <SignIn /> // If not authenticated, show SignIn page
            )
          }
        />
        <Route
          path="/landing/howitworks/"
          element={<HowItWorks />}
        />
      </Routes>
  
      <Footer />
    </div>
  );
}

export default App;
