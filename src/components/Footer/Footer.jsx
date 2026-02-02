import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-light py-4 mt-5">
        <Container>
          <Row className="text-center text-md-start">
            {/**Kolom 1: logo dan deskripsi */}
            <Col md={4}>
              <h5>PeTIK Blog</h5>
              <p>
                Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah
                lembaga pendidikan berbasis IT yang membentuk generasi siap
                menghadapi dunia digital
              </p>
              <p>
                Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia
                digital bersama mentor dan praktisi industri
              </p>
            </Col>

            {/**Kolom 2: Navigasi */}

            <Col md={4}>
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    to={"/"}
                    className={"text-white text-decoration-none"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/posts"}
                    className={"text-white text-decoration-none"}
                  >
                    Posts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={"text-white text-decoration-none"}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </Col>

            {/**Kolom 3: Kontak */}

            <Col md={4}>
              <h5>Contact Us</h5>
              <p>
                Jl. Mandor Basar No.54, Rangkapan Jaya, Kec. Pancoran Mas, Kota
                Depok, Jawa Barat 16434
              </p>
              <p className="small">Phone : (021) 77886691</p>
              <p className="small"> Email : info@petik.or.id</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
