import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Register() {
  const [data, setData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-realestate-5.onrender.com/api/auth/register/', {
        username: data.username,
        email: data.email,
        password: data.password
      });
      toast.success("✅ Registered successfully!");
      alert("✅ You have been registered successfully!");
    } catch (err) {
      console.error(err.response?.data);
      toast.error("❌ Registration failed!");
      alert("❌ Registration failed. Please check the details and try again.");
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input className="input" name="username" placeholder="Username" onChange={handleChange} required />
        <input className="input" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn" type="submit">Register</button>
      </form>

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account?{' '}
        <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
          Login
        </Link>
      </p>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Register;
