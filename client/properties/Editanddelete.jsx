import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './edit.css';
function PropertyList() {
  const [properties, setProperties] = useState([]);
  const accessToken = localStorage.getItem('access');

  const fetchProperties = async () => {
    try {
      const res = await axios.get('https://backend-realestate-5.onrender.com/api/properties/', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setProperties(res.data);
    } catch (error) {
      toast.error("Error fetching properties");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-realestate-5.onrender.com/api/properties/${id}/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      toast.success("Deleted successfully!");
      fetchProperties();
    } catch (err) {
      toast.error("Delete failed.");
    }
  };

  useEffect(() => {
    if (accessToken) fetchProperties();
  }, []);

  return (
    <div className="container">
      <h2>Your Properties</h2>
      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        properties.map((prop) => (
          <div key={prop.id} className="property-card">
            <h3>{prop.title}</h3>
            <p>{prop.description}</p>
            <p><strong>₹</strong> {prop.price}</p>
            <p>{prop.address}, {prop.city}, {prop.state}</p>
            <button className="btn" onClick={() => handleDelete(prop.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default PropertyList;
