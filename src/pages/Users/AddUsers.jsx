import axiosInstance from "../../Untils/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const navigate = useNavigate();

  // State data User
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pelanggan");
  const [status, setStatus] = useState("aktif");

  //   State Data Pelanggan
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("L");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [kartuId, setKartuId] = useState(4);
  const [kartuList, setKartuList] = useState([]);

  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const getKartuList = async () => {
    try {
      const result = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/kartu`,
      );
      setKartuList(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getKartuList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const userResponse = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          username,
          email,
          password,
          role,
          status,
          gambar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (role === "pelanggan") {
        const newUserId = userResponse.data.data.id;
        await axiosInstance.post(`${import.meta.env.VITE_API_URL}/pelanggan`, {
          nama,
          gender,
          no_hp: noHp,
          alamat,
          tgl_lahir: tglLahir,
          kartu_id: kartuId,
          user_id: newUserId,
        });
      }

      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handlechangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="user-page">
      <div className="users-header">
        <h3>Tambah Kategori</h3>
      </div>
      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Contoh: Budiono Siregar"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && (
            <span className="error" style={{ color: "red" }}>
              {errors.username}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Contoh: budiono@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <span className="error" style={{ color: "red" }}>
              {errors.email}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <span className="error" style={{ color: "red" }}>
              {errors.password}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="role">Role</label>
          <select
            value={role}
            id="role"
            onChange={(e) => setRole(e.target.value)}
          >
            <option disabled>-Pilih Role-</option>
            <option value="pelanggan">Pelanggan</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <span className="error" style={{ color: "red" }}>
              {errors.role}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="status">Status</label>
          <select
            value={status}
            id="status"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option disabled>-Pilih Status-</option>
            <option value="aktif">Aktif</option>
            <option value="nonaktif">NonAktif</option>
          </select>
          {errors.status && (
            <span className="error" style={{ color: "red" }}>
              {errors.status}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="gambar">Gambar</label>
          <input
            type="file"
            id="gambar"
            accept="image/*"
            onChange={handlechangeImage}
          />
          {preview && <img src={preview} alt="image-preview" width={220} />}
        </div>

        {role === "pelanggan" && (
          <>
            <div className="from-grid">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                id="nama"
                placeholder="Contoh: Elektronik"
                onChange={(e) => setNama(e.target.value)}
                required
              />
              {errors.nama && (
                <span className="error" style={{ color: "red" }}>
                  {errors.nama}
                </span>
              )}
            </div>

            <div className="l">
              <label>Jenis Kelamin</label>
              <br />
              <label htmlFor="gender">
                <input
                  type="radio"
                  id="l"
                  value="L"
                  checked={gender === "L"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Laki-laki
              </label>

              <label htmlFor="p">
                <input
                  type="radio"
                  id="p"
                  value="P"
                  checked={gender === "P"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Perempuan
              </label>
              {errors.nama && (
                <span className="error" style={{ color: "red" }}>
                  {errors.nama}
                </span>
              )}
            </div>

            <div className="from-grid">
              <label htmlFor="nohp">Nomor Hp</label>
              <input
                type="text"
                id="nohp"
                placeholder="Contoh: 08123456789"
                onChange={(e) => setNoHp(e.target.value)}
                required
              />
              {errors.nohp && (
                <span className="error" style={{ color: "red" }}>
                  {errors.nohp}
                </span>
              )}
            </div>

            <div className="from-grid">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                id="alamat"
                placeholder="Contoh: Jl. Pempek No.12"
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
              {errors.alamat && (
                <span className="error" style={{ color: "red" }}>
                  {errors.alamat}
                </span>
              )}
            </div>

            <div className="from-grid">
              <label htmlFor="tgl_lahir">Tanggal Lahir</label>
              <input
                type="date"
                id="tgl_lahir"
                placeholder="Contoh: Elektronik"
                onChange={(e) => setTglLahir(e.target.value)}
                required
              />
              {errors.tgl_lahir && (
                <span className="error" style={{ color: "red" }}>
                  {errors.tgl_lahir}
                </span>
              )}
            </div>

            <div className="from-grid">
              <label htmlFor="kartu_id">Membership</label>
              <select
                value={kartuId}
                id="kartu_id"
                onChange={(e) => setKartuId(e.target.value)}
              >
                <option disabled>-Pilih Langganan-</option>
                {kartuList.map((kartu) => (
                  <option key={kartu.id} value={kartu.id}>
                    {kartu.nama}
                  </option>
                ))}
              </select>
              {errors.kartu_id && (
                <span className="error" style={{ color: "red" }}>
                  {errors.kartu_id}
                </span>
              )}
            </div>
          </>
        )}

        <div className="btn-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-delete"
          >
            Batal
          </button>
          <button type="submit" className="btn-tambah" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUsers;
