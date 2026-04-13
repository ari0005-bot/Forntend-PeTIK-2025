import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Checkout.css";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      setProduct(JSON.parse(productParam));
    }

    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserInfo({
          name: decoded.username || decoded.name || "User",
          phone: decoded.phone || "083167900121",
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        setUserInfo({
          name: "User",
          phone: "083167900121",
        });
      }
    }
  }, [searchParams]);

  if (!product) return <div>Loading...</div>;

  const total = product.harga * quantity;

  return (
    <div className="checkout-wrapper">
      <div className="top-bar">
        <button onClick={() => navigate(-1)}>← Kembali</button>
        <h3>Checkout</h3>
      </div>

      <div className="step-bar">
        <div className="step active">1</div>
        <div className="line active"></div>
        <div className="step">2</div>
        <div className="line"></div>
        <div className="step">3</div>
      </div>

      <div className="checkout-content">
        <div className="card product-card">
          <h4>Detail Produk</h4>

          <div className="product-flex">
            <img
              src={product.url || "https://via.placeholder.com/100"}
              alt=""
            />

            <div>
              <small>Alat Tulis</small>
              <h3>{product.nama_barang}</h3>
              <p className="price">
                Rp {product.harga.toLocaleString("id-ID")}
              </p>
              <p className="stock">Stok: {product.stok}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h4>Informasi Pembelian</h4>

          <div className="user-box">
            <strong>{userInfo.name}</strong>
            <p>{userInfo.phone}</p>
          </div>

          <div className="qty">
            <p>Jumlah</p>
            <div className="qty-box">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="summary">
            <div>
              <span>Harga satuan</span>
              <span>Rp {product.harga.toLocaleString("id-ID")}</span>
            </div>

            <div>
              <span>Jumlah</span>
              <span>{quantity}</span>
            </div>

            <div className="total">
              <span>Total</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <button className="btn-main">Lanjut ke Pembayaran →</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
