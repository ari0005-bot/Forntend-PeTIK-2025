import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Container } from "react-bootstrap";
const About = () => {
  return (
    <div className="d-flex min-vh-100 flex-column">
      <MyNavbar />
      <Container className="flex-fill">
        <h1>About PeTIK Blog</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          impedit earum blanditiis repudiandae dolores ipsum neque laborum
          nesciunt, sed facilis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          maxime aliquid dolores, iste nam quam eveniet exercitationem doloribus
          quos obcaecati.
        </p>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
