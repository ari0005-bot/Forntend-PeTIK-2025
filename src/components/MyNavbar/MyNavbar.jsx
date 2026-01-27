import { Link, NavLink } from "react-router-dom";
import "./MyNavbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <div>
      <Navbar className="Nav bg-primary">
        <Container>
          <Navbar.Brand className="fw-bold">
            <Link to={"/"}>PeTIK BLOG</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to={"/"}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/posts"}>Posts</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/about"}>About</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
