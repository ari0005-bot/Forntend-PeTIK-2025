import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  const token = localStorage.getItem("token");
  const decoded = token ? jwtDecode(token) : null;
  const role = decoded ? decoded.role : "admin";
  console.log(role);

  const menuAdmin = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/pesanan", label: "Pesanan" },
    { to: "/dashboard/produk", label: "Produk" },
    { to: "/dashboard/kategori", label: "Kategori" },
    { to: "/dashboard/pelanggan", label: "Pelanggan" },
    { to: "/dashboard/kartu", label: "Kartu" },
    { to: "/dashboard/history", label: "History" },
  ];

  const menuPelanggan = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/dashboard/pesanan", label: "Pesanan" },
    { to: "/dashboard/history", label: "History" },
  ];

  const menuList = role === "pelanggan" ? menuPelanggan : menuAdmin;

  return (
    <div className="Sidebar">
      <div className="sidebar-logo">
        <img src="https://picsum.photos/200/200" alt="logo" />
        <h3>PeTIK Niaga</h3>
      </div>
      <ul>
        {menuList.map((menu) => (
          <li key={menu.to}>
            <NavLink
              to={menu.to}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
              end={menu.to === "/dashboard"}
            >
              {menu.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
