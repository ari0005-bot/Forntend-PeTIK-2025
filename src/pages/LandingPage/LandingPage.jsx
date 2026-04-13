import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Untils/axiosInstance";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./LandingPage.css";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // ✅ TAMBAH INI
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // ✅ konsisten
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  // ✅ FILTER FRONTEND
  useEffect(() => {
    if (selectedCategory === "all") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.jenis_produk_id === selectedCategory,
      );
      setProducts(filtered);
    }
  }, [selectedCategory, allProducts]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/produk`,
      );

      setAllProducts(result.data.data);
      setProducts(result.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );
      setCategories(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="landing-page">
      <MyNavbar search="" setSearch={() => {}} />

      <section className="hero">
        <div className="hero-content">
          <h1>Belanja Mudah, Harga Terbaik</h1>
          <p>Temukan berbagai produk berkualitas dengan harga terjangkau</p>
          <Link to="/dashboard/produk" className="btn-primary">
            Lihat Produk
          </Link>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Kategori Produk</h2>

          <div className="category-buttons">
            <button
              className={`category-btn ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              Semua
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.nama}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h2>Produk Kami</h2>

          {loading ? (
            <div className="loading">Memuat produk...</div>
          ) : (
            <div className="product-grid">
              {products.length === 0 ? (
                <p>Tidak ada produk di kategori ini</p>
              ) : (
                products.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img
                        src={product.url || "https://via.placeholder.com/150"}
                        alt={product.nama_barang}
                      />
                    </div>

                    <div className="product-info">
                      <h3>{product.nama_barang}</h3>
                      <p className="stock">Stok: {product.stok}</p>
                      <p className="price">
                        Rp {product.harga.toLocaleString("id-ID")}
                      </p>

                      <div className="product-actions">
                        <button className="btn-cart">+ Keranjang</button>
                        <button className="btn-buy">Beli</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h3>Petik Niaga</h3>
          <p>Belanja mudah, harga terbaik, pelayanan terpercaya</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
