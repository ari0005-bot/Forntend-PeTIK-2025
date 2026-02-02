import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import hero_img from "../../assets/news.svg";

const Home = () => {
  const categories = ["Teknologi", "Otomotif", "Fashion", "Sport"];

  return (
    <div className="d-flex min-vh-100 flex-column">
      {/** HERO */}
      <div className="bg-primary text-light py-5 flex-fill d-flex align-items-center ">
        <Container className="flex-fill d-flex align-items-center">
          <Row className="w-100 align-items-center">
            {/**Kiri Hero: Teks dan CTA */}
            <Col md={6} className="mb-4 mb-md-0">
              <h1>Selamat Datang di PeTIK Blog</h1>
              <p className="lead">
                Pesantren Teknologi Informasi dan Komunikasi (PeTIK) adalah
                lembaga pendidikan yang fokus pada pengembangan keterampilan IT,
                khususnya web development, mobile development dan jaringan.
              </p>
              <p>
                Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia
                digital bersama mentor dan praktisi indutri.
              </p>
              <Button variant="light" size="lg" href="/posts" className="">
                Pelajari lebih lanjut
              </Button>
            </Col>

            {/** Kanan Hero: gambar */}
            <Col md={6}>
              <img src={hero_img} alt="hero image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      {/** HERO */}

      {/** Popular Catagories Section */}
      <Container className="my-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Kategori Terpopuler</h2>
            <p className="text-muted">Ekplor Kategori yang menarik</p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center">
          {categories.map((category, index) => (
            <Col md={4} key={index}>
              <Card className="text-center shadow-sm category-card">
                <Card.Body>
                  <Card.Title className="fw-bold">{category}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
