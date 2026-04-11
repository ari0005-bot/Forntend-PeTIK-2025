
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Untils/axiosInstance";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import "./LandingPage.css";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory === "Semua") {
      getProducts();
    } else {
      getProductsByCategory();
    }
  }, [selectedCategory]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/produk`,
      );
      console.log("Products API Response:", result);
      setProducts(result.data.data);
    } catch (error) {
      console.log("Products API Error:", error.response?.status, error.response?.data);
      if (error.response?.status === 401) {
        console.log("API membutuhkan authentication untuk produk");
        alert("Silakan login terlebih dahulu untuk melihat produk");
      } else {
        console.log("Error lain:", error.message);
        alert("Gagal memuat data produk");
      }
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

  const getProductsByCategory = async () => {
    setLoading(true);
    try {
      const category = categories.find(cat => cat.nama === selectedCategory);
      if (category) {
        const result = await axiosInstance.get(
          `${import.meta.env.VITE_API_URL}/produk?jenis_produk_id=${category.id}`,
        );
        setProducts(result.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    alert(`${product.nama_barang} ditambahkan ke keranjang`);
  };

  const buyNow = (product) => {
    alert(`Beli ${product.nama_barang}`);
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
              className={`category-btn ${selectedCategory === "Semua" ? "active" : ""}`}
              onClick={() => setSelectedCategory("Semua")}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.nama ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.nama)}
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
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.url} alt={product.nama_barang} />
                  </div>
                  <div className="product-info">
                    <h3>{product.nama_barang}</h3>
                    <p className="stock">Stok: {product.stok}</p>
                    <p className="price">Rp {product.harga.toLocaleString("id-ID")}</p>
                    <div className="product-actions">
                      <button
                        className="btn-cart"
                        onClick={() => addToCart(product)}
                      >
                        + Keranjang
                      </button>
                      <button
                        className="btn-buy"
                        onClick={() => buyNow(product)}
                      >
                        Beli
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
