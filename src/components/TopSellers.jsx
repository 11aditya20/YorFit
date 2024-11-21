import React from 'react';
import '../styles/TopSellers.css'

function TopSellers() {
  return (
    <section className="top-sellers">
      <h2>Top Sellers</h2>
      <div className="sellers-grid">
        <div className="seller-item">Navy Suit</div>
        <div className="seller-item">Green Polo</div>
        <div className="seller-item">Jeans</div>
        <div className="seller-item">Chinos</div>
      </div>
    </section>
  );
}

export default TopSellers;
