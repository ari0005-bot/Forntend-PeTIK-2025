import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Blog from "./Pages/Blogs/Blogs.jsx";
import About from "./Pages/About/About.jsx";
import DetailBlog from "./Pages/DetailBlog/DetailBlog";
import News from "./Pages/News/News.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar/MyNavbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/:id" element={<DetailBlog />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:portal/:index" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
