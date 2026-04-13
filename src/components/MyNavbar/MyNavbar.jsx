import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./MyNavbar.css";
import { GiShoppingCart } from "react-icons/gi";


const MyNavbar = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getUserLogin = () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      setUsername(decoded.username);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUserLogin();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <div className="navbar-brand">
          <div className="logo-circle">P</div>
          <Link to="/">Petik Niaga</Link>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Beranda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/produk" className="nav-link">
              Produk
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              Tentang
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Kontak
            </Link>
          </li>
        </ul> */}

        <div className="navbar-actions">
          <div className="search-box">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="🔍 Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="cart-icon">
            <GiShoppingCart />
          </button>

          {username ? (
            <div className="user-menu">
              <span className="username">{username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
