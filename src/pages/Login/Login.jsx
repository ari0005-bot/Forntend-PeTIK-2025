import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { NavLink, replace, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          username,
          password,
        },
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      console.log(decoded);

      if (decoded.role === "pelanggan") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
      console.log(response);
    } catch (error) {
      console.log(error?.response);
    }
  };

  //   ini buat user ketika sudah login makan tidak harus login lagi
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.role === "pelanggan") {
        navigate("/", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, []);

  const handleGoogleSuccess = async (CredentialResponse) => {
    try {
      const decode = jwtDecode(CredentialResponse.credential);
      console.log("Login sebagai google berhasil", decode);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login/google`,
        {
          token: CredentialResponse.credential,
        },
      );

      const token = response.data.token;
      const decoded = jwtDecode(token);
      // console.log(decoded);

      localStorage.setItem("token", token);
      localStorage.setItem("loginType", "google");

      if (decoded.role === "pelanggan") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }

      // console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleGoogleError = () => {
    console.log("Login google gagal");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <NavLink>
            <div className="login-logo-icon"></div>
          </NavLink>
          <h2>Petik Niaga</h2>
          <p>Login</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              placeholder="Masukan username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              autoFocus
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Masukan password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Masuk
          </button>
          <div>
            <span>Atau masuk dengan google</span>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
          ;
        </form>
      </div>
    </div>
  );
};

export default Login;
