import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Kategori from "./pages/Kategori/Kategori";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
import AddKategori from "./pages/Kategori/AddKategori";
import Produk from "./pages/Produk/Produk";
import Kartu from "./pages/Kartu/Kartu";
import Pesanan from "./pages/Pesanan/Pesanan";
import Pelanggan from "./pages/Pelanggan/Pelanggan";
import Users from "./pages/Users/Users";
import History from "./pages/History/History";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route element={<h1>Dashboard</h1>} />

          {/* Pesanan */}
          <Route path="/dashboard/pesanan" element={<Pesanan />} />
          <Route path="/dashboard/pesanan/add" element={<h2>Tambah Pesanan</h2>} />

          {/* Produk */}
          <Route path="/dashboard/produk" element={<Produk />} />
          <Route
            path="/dashboard/produk/add"
            element={<h1>Tambah Produk</h1>}
          />
          <Route path="/dashboard/produk/edit" element={<h1>Edit Produk</h1>} />

          {/* Jenis Produk */}
          <Route path="/dashboard/kategori" element={<Kategori />} />
          <Route path="/dashboard/kategori/add" element={<AddKategori />} />

          {/* Pelanggan */}
          <Route path="/dashboard/pelanggan" element={<Pelanggan />} />
           <Route path="/dashboard/pelanggan/add" element={<h2>Tambah Pelanggan</h2>} />

          {/* Kartu */}
          <Route path="/dashboard/kartu" element={<Kartu />} />
          <Route path="/dashboard/kartu/add" element={<h1>Tambah Kartu</h1>} />

          {/* Users */}
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/users/add" element={<h2>Tambah Users</h2>} />

          {/* History */}
          <Route path="/dashboard/history" element={<History />} />
           <Route path="/dashboard/history/add" element={<h1>History</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
