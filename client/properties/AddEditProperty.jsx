import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './add.css'
function AddEditProperty({ fetchProperties }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    address: '',
    city: '',
    state: ''
  });

  const accessToken = localStorage.getItem('access');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      return toast.error("You must be logged in to add a property.");
    }

    try {
      await axios.post(
        'https://backend-realestate-5.onrender.com/api/properties/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("Property added successfully!");
      setFormData({
        title: '', description: '', price: '', location: '',
        address: '', city: '', state: ''
      });
      fetchProperties(); // optional: refresh property list
    } catch (error) {
      toast.error("Failed to add property.");
      console.log(error.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Add New Property</h2>
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          className="input"
          type={field === "price" ? "number" : "text"}
          name={field}
          value={formData[field]}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          onChange={handleChange}
          required
        />
      ))}
      <button className="btn" type="submit">Submit</button>
    </form>
  );
}

export default AddEditProperty;
