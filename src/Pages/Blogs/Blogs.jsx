import Article from "../../components/Article/Article";
import posts from "../../post.json";
import Navbar from "../../components/Navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <h1>Daftar Artikel</h1>
      <Article posts={posts} />
    </div>
  );
};

export default Blogs;
