import { useParams } from "react-router-dom";
import MyNavbar from "../../components/MyNavbar/MyNavbar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer.jsx";

const DetailBlog = () => {
  const [post, setPost] = useState("");
  const [coments, setComents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const comentResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setPost(postResponse.data);
        setComents(comentResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <MyNavbar />
      <h1>Detail Blog</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <hr />
      <h4>KOMENTAR</h4>
      {coments
        .filter((c) => c.postId === parseInt(id))
        .map((comment) => (
          <div
            key={comment.id}
            style={{
              border: "1px solid grey",
              margin: "6px",
              padding: "6px",
              borderRadius: "10px 0px",
            }}
          >
            <b>{comment.name}</b>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      <Footer />
    </div>
  );
};

export default DetailBlog;
