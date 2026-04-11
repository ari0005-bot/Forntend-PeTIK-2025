import React, { useEffect, useState } from "react";
import axiosInstance from "../../Untils/axiosInstance";
import { NavLink, useOutletContext } from "react-router-dom";

const History = () => {
  const [history, sethistory] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/history`);
      sethistory(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = history.filter((item) =>
    item.user?.email?.toLowerCase().includes(search.toLowerCase()),
  );

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);

  const paginatedData = filterData.slice(
    (currentpage - 1) * ITEMS_PER_PAGE,
    currentpage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleDelete = async (uuid) => {
    const msg = window.confirm("Apakah yakin ingin menghapus history ini?");
    if (!msg) return;

    try {
      await axiosInstance.delete(`${import.meta.env.VITE_API_URL}/history/${uuid}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar history</h3>
        <NavLink to={"/dashboard/history/add"}>Tambah history</NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
              <th>Table</th>
              <th>Value</th>
              <th>Gambar</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={item.uuid}>
                  <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>

                  <td>{item.user?.email}</td>
                  <td>{item.user?.username}</td>
                  <td>{item.user?.role}</td>
                  <td>{item.user?.status}</td>

                  <td>{item.action}</td>
                  <td>{item.table}</td>
                  <td>{item.value}</td>

                  <td>
                    <img src={item.url || item.user?.url} alt="gambar" width={80} />
                  </td>

                  <td>
                    <button>Edit</button>
                    <button onClick={() => handleDelete(item.uuid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10}>Data tidak ditemukan</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="btn-page"
            disabled={currentpage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &laquo; Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className="btn-page"
              disabled={currentpage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn-page"
            disabled={currentpage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default History;
