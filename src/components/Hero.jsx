import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';


function Hero() {
  const navigate = useNavigate();
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        handleNextClick();
      }, 0);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setFadeState('fade-in');
    }, 1000);
  };

  const handleNextClick = () => {
    setFadeState('fade-out');
    setTimeout(() => {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setFadeState('fade-in');
    }, 1000);
  };

  const handleNavigate = () => {
    console.log('Navigating to /order');  // Ensure this log appears in the console
    navigate('/landing/HowItWorks');
  };
  

  return (
    <section className="hero">
      <div className="hero-slider">
        <div className={`image-container ${fadeState}`}>
          <img src={images[currentIndex]} alt={`Custom Fit Clothes ${currentIndex + 1}`} />
        </div>
        <div className="hero-content">
          <h1>Your Perfect Fit, Just a Tap Away</h1>
          <p>Achieve custom clothing tailored to you with the power of your phone and our cutting-edge tech.</p>
          <div className="hero-buttons">
            <Link to={"/getfit"} >
            <button>Order Your Custom Fit
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
            </Link>
            <Link to={"/aboutus"} >
            <button>Learn More
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
            </Link>
          </div>
        </div>
        <button className="slider-button prev" onClick={handlePrevClick}>❮</button>
        <button className="slider-button next" onClick={handleNextClick}>❯</button>
      </div>
    </section>
  );
}

export default Hero;
