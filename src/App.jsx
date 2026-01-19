import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Blog from "./Pages/Blogs/Blogs.jsx";
import About from "./Pages/About/About.jsx";
import DetailBlog from "./Pages/DetailBlog/DetailBlog";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/detail" element={<DetailBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
