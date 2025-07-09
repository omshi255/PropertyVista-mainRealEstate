
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/accounts/api/properties/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleAddToWishlist = (property) => {
    // Check if the user is logged in
    const accessToken = localStorage.getItem("access");

    if (!accessToken) {
      toast.error("You must be logged in to add to wishlist.");
      return;
    }

    if (!wishlist.find((item) => item.id === property.id)) {
      setWishlist([...wishlist, property]);
      toast.success(`${property.title} has been added to your wishlist!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info(`${property.title} is already in your wishlist.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) return <div>Loading properties...</div>;
  if (error) return <div>Error loading properties: {error}</div>;

  return (
    <div>
      <div className="heading-container">
        <h2 className="heading-title">
          Find Better Places to Live, Work, and Wonder...
        </h2>
        <div className="underline"></div>
      </div>
      <Slider {...sliderSettings} className="property-cards-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <div className="imgBox">
              <img
                src={`http://127.0.0.1:8000${property.image}`}
                alt={property.title}
                className="property-image"
              />
            </div>
            <h3>{property.title}</h3>
            <p className="cardDis">{property.description}</p>
            <p>
              <strong>Price:</strong> ${property.price}
            </p>
            <p>
              <strong>Location:</strong> {property.location}
            </p>
            <div className="action-buttons">
              <button
                className="wishlist-button"
                onClick={() => handleAddToWishlist(property)}
              >
                Add to Wishlist
              </button>
              <label className="ui-like">
                <input type="checkbox" />
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill=""
                  >
                    <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                  </svg>
                </div>
              </label>
            </div>
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
