import { Link, NavLink } from "react-router-dom";
import "./MyNavbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <div>
      <Navbar className="Nav bg-primary py-3">
        <Container>
          <Navbar.Brand className="fw-bold">
            <Link to={"/"}>PeTIK BLOG</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink
              to={"/"}
              className={`nav-item mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
            >
              Home
            </NavLink>

            <NavLink
              to={"/posts"}
              className={`nav-item mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
            >
              Posts
            </NavLink>

            <NavLink
              to={"/news"}
              className={`nav-item mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
            >
              News
            </NavLink>

            <NavLink
              to={"/about"}
              className={`nav-item mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
            >
              About
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
