import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access'));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('access'));
  }, [location]); // re-check login on route change

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    alert("🚪 Logged out!");
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-brand">PROPERTYVISTA</Link>
      </div>
      <div className="navbar-links">
        {!isLoggedIn ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="btn nav-btn">Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
