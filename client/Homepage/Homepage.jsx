import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Editanddelete from '../properties/Editanddelete.jsx';

function Home() {
  return (
<>
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h1 className="home-title">Welcome to <span className="highlight">PropertyVista</span></h1>
          <p className="home-subtitle">India’s trusted platform to <strong>Buy</strong>, <strong>Sell</strong>, and <strong>Rent</strong> properties — with ease and transparency.</p>
          <div className="home-buttons">
            <Link to="/register" className="btn">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Why Choose PropertyVista?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>Verified Listings</h3>
            <p>All properties listed are verified by our expert team to ensure you deal only with trusted sellers.</p>
          </div>
          <div className="feature-box">
            <h3>Instant Support</h3>
            <p>Got questions? Our support team is just a message away, available 24/7.</p>
          </div>
          <div className="feature-box">
            <h3>Smart Search</h3>
            <p>Use filters to find homes that perfectly match your budget, location, and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  
       <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/add-property" className="btn">+ Add Property</Link>
        </div>
    

    <br /><br /><br />
    <h2>Some PropertyListings By Owner !</h2>
   
  <Editanddelete />

</>
    
  );
}

export default Home;
