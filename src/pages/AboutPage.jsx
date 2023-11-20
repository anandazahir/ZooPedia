import React from "react";

import { Container, Card, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Component/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5 mb-5">
        <Container className="d-flex  justify-content-center">
          <Card
            className="gap-3 bg-green-900 d-flex flex-column text-white"
            style={{ width: "80vw", marginTop: "50px" }}
          >
            <Link to="/">
              <Image
                src="/Logo.svg"
                alt="profile picture"
                style={{ width: "20vw", height: "20vw" }}
                className=" mx-auto d-block animationimg"
              />
            </Link>

            <Card.Body>
              <Card.Title>
                <h1 className="text-center h1 fw-bold text-green-200 mb-3">
                  ZooPedia
                </h1>
              </Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <span className="h3">Welcome to Zoopedia</span>
                <span className="h5">
                  , your ultimate source for up-to-date and comprehensive
                  information about the animal kingdom! Zoopedia is the outcome
                  of a final project in the component-based software engineering
                  practicum at the{" "}
                  <span className="fw-bold text-green-200">
                    Computer Engineering department of Diponegoro University
                  </span>
                  . Zoopedia is crafted using cutting-edge technologies,
                  including{" "}
                  <a
                    className="fw-bold text-green-200 text-decoration-none"
                    href="https://vitejs.dev/"
                  >
                    React Vite
                  </a>
                  ,
                  <a
                    className="fw-bold text-green-200 text-decoration-none"
                    href="https://firebase.google.com/?hl=id"
                  >
                    Firebase
                  </a>
                  , and{" "}
                  <a
                    className="fw-bold text-green-200 text-decoration-none"
                    href="https://getbootstrap.com/"
                  >
                    Bootstrap
                  </a>
                  .
                </span>
              </Card.Text>
            </Card.Body>
            <Card.Title>
              <h1 className="text-center h1 fw-bold">Our Team</h1>
              <p className="text-center">Kelompok 05 Prak.RPLBK</p>
            </Card.Title>
            <Card.Body className="mb-4 text-center">
              <Container className="row gap-4">
                <Container md={3} className="container-fluid col ">
                  <a href="#">
                    <Image
                      src="src\assets\WhatsApp Image 2023-09-26 at 14.50.15.jpeg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Hafizh Anjar Saputra</h2>
                </Container>
                <Container md={3} className="container-fluid col ">
                  <a href="https://www.instagram.com/ananda.zahir/">
                    <Image
                      src="src\assets\D36C6D09-C60A-4C3B-BC5C-876208C8B64D.jpeg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Ananda Muhammad Zahir</h2>
                </Container>
                <Container md={3} className="container-fluid col ">
                  <a href="https://www.instagram.com/maulanaarr/">
                    <Image
                      src="src\assets\intagram_picture8749873894798.jpg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Maulana Yusuf Arrasyid</h2>
                </Container>
                <Container md={3} className="container-fluid col ">
                  <a href="https://www.instagram.com/ami_gyt09/">
                    <Image
                      src="src\assets\WhatsApp Image 2023-09-26 at 15.38.31 (1).jpeg"
                      alt="profile picture"
                      style={{ width: "200px", height: "200px" }}
                      roundedCircle
                      className="animationimg"
                    />
                  </a>
                  <h2 className="mt-3">Sugiyatmi</h2>
                </Container>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default AboutPage;
