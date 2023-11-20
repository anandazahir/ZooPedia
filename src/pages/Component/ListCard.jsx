import React from "react";
import AnimalCard from "./AnimalCard";
import { Container, Row, Col } from "react-bootstrap";

const ListCard = ({ animals }) => {
  return (
    <Container className="d-flex flex-column justify-content-center mb-3">
      <h1 className="text-center text-white mt-3 fw-bold">ALL</h1>
      <h1 className="text-center text-white fw-bold">ANIMAL</h1>
      <Row className="container-fluid justify-content-center mx-auto">
        {animals.map((data) => (
          <Col xl={3} md={6} lg={4} sm={12} key={data.id}>
            <AnimalCard animal={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListCard;
