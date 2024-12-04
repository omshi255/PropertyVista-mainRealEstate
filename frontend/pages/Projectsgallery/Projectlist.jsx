import "../Projectsgallery/projectlist.css"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PropertyPage = () => {
  const property = {
    name: '2 BHK Flats & Apartments',
    location: 'Zadeshwar, Bharuch',
    price: '₹25,000/month',
    size: '1400 sq ft',
    description: 'Spacious 2 BHK flat for rent in a prime location. Suitable for families.',
    images: [
      'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
      'https://media.architecturaldigest.com/photos/571e97c5741fcddb16b559c9/master/pass/modernist-decor-inspiration-01.jpg', 
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D'
    ],
    contact: 'John Doe',
    phone: '+91 9876543210'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
  };

  return (
    <>
    <div className="property-list-heading">
    <h2 className="property-list-title">
    Welcome, We will Show You Best Properties
    </h2>
    <div className="property-list-underline"></div>
  </div>
    <div className="property-page">
      <div className="property-details">
        <h1>{property.name}</h1>
        <h2>{property.location}</h2>
        <p className="price">{property.price}</p>
        <p>{property.size}</p>
        <p className="description">{property.description}</p>
        
        {/* Image Slider */}
        <div className="image-gallery">
          <Slider {...settings}>
            {property.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Property ${index + 1}`} className="property-image"/>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="features">
  <h3>Key Features</h3>
  <table className="features-table">
    <tbody>
      <tr>
        <td className="feature-title">Parking</td>
        <td className="feature-value">Available</td>
      </tr>
      <tr>
        <td className="feature-title">Balcony</td>
        <td className="feature-value">Yes</td>
      </tr>
      <tr>
        <td className="feature-title">24x7 Water Supply</td>
        <td className="feature-value">Yes</td>
      </tr>
      <tr>
        <td className="feature-title">Modern Kitchen</td>
        <td className="feature-value">Fully Equipped</td>
      </tr>
      <tr>
        <td className="feature-title">Security</td>
        <td className="feature-value">24/7 Surveillance</td>
      </tr>
      <tr>
        <td className="feature-title">Furnished</td>
        <td className="feature-value">Partially Furnished</td>
      </tr>
      <tr>
        <td className="feature-title">Air Conditioning</td>
        <td className="feature-value">Available</td>
      </tr>
    </tbody>
  </table>
</div>

        
<div className="contact-details">
  <h3>Contact Information</h3>
  <div className="contact-info">
    <p className="contact-item">
      <i className="fa fa-user"></i> Contact: {property.contact}
    </p>
    <p className="contact-item">
      <i className="fa fa-phone"></i> Phone: {property.phone}
    </p>
  </div>
  <div className="consultancy-img">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzA8rEQNCmo4Ae3kaPGJX6FdciUt-36fPJyw&s" alt="Consultancy Logo" />
  </div>
  <button className="contact-btn">Contact Seller</button>
</div>


      </div>
    </div></>
  );
};

export default PropertyPage;
