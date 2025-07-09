import React from 'react'
import './sale.css';
const SaleSection = () => {
    return (
      <div className="sale-section">
        <div className="video-wrapper">
        <video autoPlay loop muted className="background-video" >
          <source src="https://videos.pexels.com/video-files/7578550/7578550-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="sale-banner">
          <h1>Exclusive Property Offers</h1>
          <p>
            Save up to <span className="discount">15%</span> on Dream Homes
          </p>
          <p className="details">
            Don't miss out on the best deals for apartments and villas.
          </p>
          <button className="button-1 type1">
  <span className="btn-txt">Explore Now</span>
</button>
        </div>
      </div>
    );
  };
  
  export default SaleSection;

