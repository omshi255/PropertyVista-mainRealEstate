// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // function Login() {
// // //   const [credentials, setCredentials] = useState({ username: '', password: '' });

// // //   const handleChange = (e) => {
// // //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// // //   };

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axios.post('https://backend-realestate-5.onrender.com/api/auth/login/', {
// // //         username: credentials.username,
// // //         password: credentials.password,
// // //       });
// // //       localStorage.setItem('access', res.data.access);
// // //       localStorage.setItem('refresh', res.data.refresh);
// // //       alert('✅ Logged in successfully!');
// // //     } catch (error) {
// // //       alert('❌ Login failed! Please check credentials.');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleLogin} className="login-form">
// // //       <input name="username" placeholder="Username" onChange={handleChange} />
// // //       <input name="password" type="password" placeholder="Password" onChange={handleChange} />
// // //       <button type="submit">Login</button>
// // //     </form>
// // //   );
// // // }

// // // export default Login;
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Login() {
// //   const [credentials, setCredentials] = useState({ username: '', password: '' });
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   const handleChange = (e) => {
// //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('https://backend-realestate-5.onrender.com/api/auth/login/', {
// //         username: credentials.username,
// //         password: credentials.password,
// //       });
// //       localStorage.setItem('access', res.data.access);
// //       localStorage.setItem('refresh', res.data.refresh);
// //       setIsLoggedIn(true);
// //       alert('✅ Logged in successfully!');
// //     } catch (error) {
// //       alert('❌ Login failed! Please check credentials.');
// //     }
// //   };

// //   const handleLogout = async () => {
// //     const refreshToken = localStorage.getItem('refresh');

// //     try {
// //       await axios.post('https://backend-realestate-5.onrender.com/api/auth/logout/', {
// //         refresh: refreshToken,
// //       }, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem('access')}`,
// //         },
// //       });

// //       localStorage.removeItem('access');
// //       localStorage.removeItem('refresh');
// //       setIsLoggedIn(false);
// //       alert('🚪 Logged out successfully!');
// //     } catch (error) {
// //       alert('❌ Logout failed!');
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       {!isLoggedIn ? (
// //         <form onSubmit={handleLogin} className="login-form">
// //           <input name="username" placeholder="Username" onChange={handleChange} required />
// //           <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
// //           <button type="submit">Login</button>
// //         </form>
// //       ) : (
// //         <div>
// //           <p>✅ You're logged in!</p>
// //           <button onClick={handleLogout}>Logout</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';

// function Login() {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://backend-realestate-5.onrender.com/api/auth/login/', credentials);
//       localStorage.setItem('access', res.data.access);
//       localStorage.setItem('refresh', res.data.refresh);
//       setIsLoggedIn(true);
//       toast.success('✅ Logged in successfully!');
//     } catch (error) {
//       toast.error('❌ Login failed! Please check credentials.');
//     }
//   };

//   const handleLogout = async () => {
//     const refreshToken = localStorage.getItem('refresh');

//     try {
//       await axios.post(
//         'https://backend-realestate-5.onrender.com/api/auth/logout/',
//         { refresh: refreshToken },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('access')}` } }
//       );

//       localStorage.removeItem('access');
//       localStorage.removeItem('refresh');
//       setIsLoggedIn(false);
//       toast.success('🚪 Logged out successfully!');
//     } catch (error) {
//       toast.error('❌ Logout failed!');
//     }
//   };

//   return (
//     <div className="container">
//         <h2>Login</h2>
//       {!isLoggedIn ? (
//         <form onSubmit={handleLogin} className="login-form">
//           <input className="input" name="username" placeholder="Username" onChange={handleChange} required />
//           <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
//           <button className="btn" type="submit">Login</button>
//         </form>
        
//       ) : (
//         <div>
//           <p>✅ You're logged in!</p>
//           <button className="btn" onClick={handleLogout}>Logout</button>
//         </div>
//       )}
//         <p style={{ marginTop: '1rem', textAlign: 'center' }}>
//         Already dont have an account?{' '}
//         <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default Login;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access')) {
      navigate('/'); // Redirect to home if already logged in
    }
  }, []);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://backend-realestate-5.onrender.com/api/auth/login/', credentials);
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      toast.success('✅ Logged in successfully!');
      navigate('/'); // Redirect to home after login
    } catch (error) {
      toast.error('❌ Login failed! Please check credentials.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input className="input" name="username" placeholder="Username" onChange={handleChange} required />
        <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn" type="submit">Login</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Don’t have an account?{' '}
        <Link to="/register" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
