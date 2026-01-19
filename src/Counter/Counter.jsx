import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ textAlign: "center" }}>{count}</p>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          marginRight: "5px",
          borderRadius: "10px",
          fontSize: "1rem",
          padding: "15px",
        }}
        onClick={() => setCount(count - 1)}
      >
        Kurang
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "1rem",
          marginLeft: "5px",
          padding: "15px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Tambah
      </button>
    </div>
  );
};

export default Counter;
