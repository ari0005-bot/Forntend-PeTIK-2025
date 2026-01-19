import Navbar from "../Navbar/Navbar";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigaet = useNavigate();

  return (
    <div>
      <Navbar />
      <h3>404 Halaman tidak ditemukan!</h3>
      <p>Opsssss... Halaman yang kamu cari tidak ada.</p>
      <NavLink to={"/"}>Home</NavLink>
      <button onClick={() => navigaet(-1)}>Kembali</button>
    </div>
  );
};

export default ErrorPage;
