import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);  // Track logout state
  const navigate = useNavigate();  // Hook to navigate to other pages

  useEffect(() => {
    // Check if the user has logged out by checking a flag in localStorage
    const loggedOutStatus = localStorage.getItem("loggedOut");
    if (loggedOutStatus === "true") {
      setIsLoggedOut(true);
      navigate("/");  // Redirect to homepage or a restricted page
    }
  }, [navigate]);

  const logoutHandler = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/accounts/logout/", {
        method: "POST",  // Use POST or GET depending on your Django setup
        credentials: "include",  // Ensures cookies (sessions) are sent with the request
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      const data = await response.json();
      console.log(data.message);  // Log the logout success message

      // Set the logged-out flag in localStorage to prevent login again
      localStorage.setItem("loggedOut", "true");

      setIsLoggedOut(true);  // Update the state
      navigate("/");  // Redirect to homepage after successful logout
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {isLoggedOut ? (
        <p>You have been logged out. You cannot log in again.</p>
      ) : (
        <button onClick={logoutHandler} disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </button>
      )}
    </div>
  );
};

export default HomePage;
