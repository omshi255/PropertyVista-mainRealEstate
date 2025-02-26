
// import React, { useState, useEffect } from "react";
// import ReactStars from "react-stars"; // For rating
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify"; // Import Toastify
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
// import "../components/card.css"; // For styling

// const SliderCardComponent = () => {
//   const [slides, setSlides] = useState([]); // State to store slide data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide index
//   const [slidesPerView, setSlidesPerView] = useState(4); // Default to 4 slides per view
//   const [wishlist, setWishlist] = useState(() => {
//     // Load wishlist from localStorage if available
//     const storedWishlist = localStorage.getItem("wishlist");
//     return storedWishlist ? JSON.parse(storedWishlist) : [];
//   }); // State to store wishlist items
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

  
//   // Fetch slider data
//   useEffect(() => {
//     const fetchSliderData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/accounts/api/slider/" // Replace with your backend API URL
//         );
//         setSlides(response.data); // Store data in state
//       } catch (error) {
//         console.error("Error fetching slider data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSliderData();
//   }, []);

//   // Handle window resize to adjust slides per view
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setSlidesPerView(4); // 4 slides per view for large screens
//       } else if (window.innerWidth >= 768) {
//         setSlidesPerView(3); // 3 slides per view for tablets
//       } else {
//         setSlidesPerView(1); // 1 slide per view for smaller screens (phones)
//       }
//     };

//     handleResize(); // Initial check on component mount
//     window.addEventListener("resize", handleResize); // Listen for window resize

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup on component unmount
//     };
//   }, []);

//   const handleRatingChange = (newRating, slideId) => {
//     console.log(`New rating for slide ${slideId}: ${newRating}`);
//     // Add logic to update the rating in the backend (optional)
//     toast.info(`Rating for "${slideId}" updated to ${newRating}`, {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeButton: false,
//       className: "custom-toast", // Apply custom class for styling
//       style: {
//         backgroundColor: "#FFA500", // Orange background
//         color: "#fff", // White text color
//         fontWeight: "bold",
//       },
//     });
//   };

//   // Handle add to wishlist click
//   const handleAddToWishlist = (slide) => {
//     if (!wishlist.some((item) => item.id === slide.id)) {
//       setWishlist([...wishlist, slide]); // Add to wishlist
//     }
//     if (!wishlist.some((item) => item.id === slide.id)) {
//       // If not already in wishlist
//       setWishlist([...wishlist, slide]); // Add to wishlist
//       toast.success(`Slide "${slide.title}" added to wishlist!`, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeButton: false,
//       });
//     } else {
//       // Already in wishlist
//       toast.info(`Slide "${slide.title}" is already in wishlist.`, {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeButton: false,
//       });
//     }
//   };

//   // Handle previous slide
//   const handlePrevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex <= 0 ? slides.length - slidesPerView : prevIndex - slidesPerView
//     );
//   };

//   // Handle next slide
//   const handleNextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + slidesPerView >= slides.length ? 0 : prevIndex + slidesPerView
//     );
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading message
//   }

//   return (
//     <div className="slider-card-container">
//       <div className="heading-container">
//         <h2 className="heading-title">Rate Our Properties</h2>
//         <div className="underline"></div>
//       </div>

//       <div className="carousel-container">
//         <button onClick={handlePrevSlide} className="carousel-button prev-button">
//           &lt;
//         </button>

//         <div className="card-grid">
//           {slides
//             .slice(currentIndex, currentIndex + slidesPerView)
//             .map((slide) => (
//               <div key={slide.id} className="card">
//                 <img
//                   src={slide.image_url}
//                   alt={slide.title}
//                   className="card-image"
//                 />
//                 <div className="card-content">
//                   <h2 className="card-title">{slide.title}</h2>
//                   {slide.description && (
//                     <p className="card-description">{slide.description}</p>
//                   )}
//                   {slide.link && (
//                     <a
//                       href={slide.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="card-link"
//                     >
//                       View more
//                     </a>
//                   )}
//                   <div className="rating-container">
//                     <ReactStars
//                       count={5}
//                       value={slide.rating}
//                       size={24}
//                       color2={"#ffd700"}
//                       onChange={(newRating) =>
//                         handleRatingChange(newRating, slide.id)
//                       }
//                       className="rating"
//                     />
// <button
//         onClick={() => handleAddToWishlist(slide)}
//         className={`wishlist-button ${
//           wishlist.some((item) => item.id === slide.id) ? "added" : ""
//         }`}
//       >
//         {wishlist.some((item) => item.id === slide.id)
//           ? "Added to Wishlist"
//           : "Add to Wishlist"}
//       </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>

//         <button onClick={handleNextSlide} className="carousel-button next-button">
//           &gt;
//         </button>
//       </div>

//       {/* Toast Container */}
//       <ToastContainer />
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/card.css";

const SliderCardComponent = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Fetch slider data
  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/accounts/api/slider/"
        );
        setSlides(response.data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSliderData();
  }, []);

  // Adjust slides per view on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRatingChange = (newRating, slideId) => {
    console.log(`New rating for slide ${slideId}: ${newRating}`);
    toast.info(`Rating for "${slideId}" updated to ${newRating}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeButton: false,
    });
  };

  const handleAddToWishlist = (slide) => {
    if (!wishlist.some((item) => item.id === slide.id)) {
      setWishlist([...wishlist, slide]);
      toast.success(`Slide "${slide.title}" added to wishlist!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: false,
      });
    } else {
      toast.info(`Slide "${slide.title}" is already in wishlist.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: false,
      });
    }
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? slides.length - slidesPerView : prevIndex - slidesPerView
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerView >= slides.length ? 0 : prevIndex + slidesPerView
    );
  };

  const handleLogout = () => {
    // Clear wishlist and any user-related state
    setWishlist([]);
    localStorage.removeItem("wishlist");
    toast.info("You have been logged out. Wishlist cleared!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeButton: false,
    });

    // Optionally, redirect the user or clear other session data
    // Example: window.location.href = "/login";
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="slider-card-container">
      <div className="heading-container">
        <h2 className="heading-title">Rate Our Properties</h2>
        <div className="underline"></div>
      </div>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      <div className="carousel-container">
        <button onClick={handlePrevSlide} className="carousel-button prev-button">
          &lt;
        </button>

        <div className="card-grid">
          {slides
            .slice(currentIndex, currentIndex + slidesPerView)
            .map((slide) => (
              <div key={slide.id} className="card">
                <img
                  src={slide.image_url}
                  alt={slide.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h2 className="card-title">{slide.title}</h2>
                  {slide.description && (
                    <p className="card-description">{slide.description}</p>
                  )}
                  {slide.link && (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      View more
                    </a>
                  )}
                  <div className="rating-container">
                    <ReactStars
                      count={5}
                      value={slide.rating}
                      size={24}
                      color2={"#ffd700"}
                      onChange={(newRating) =>
                        handleRatingChange(newRating, slide.id)
                      }
                      className="rating"
                    />
                    <button
                      onClick={() => handleAddToWishlist(slide)}
                      className={`wishlist-button ${
                        wishlist.some((item) => item.id === slide.id) ? "added" : ""
                      }`}
                    >
                      {wishlist.some((item) => item.id === slide.id)
                        ? "Added to Wishlist"
                        : "Add to Wishlist"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button onClick={handleNextSlide} className="carousel-button next-button">
          &gt;
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SliderCardComponent;

