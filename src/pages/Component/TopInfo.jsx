import React from "react";
import { Container, Card } from "react-bootstrap";

const TopInfo = ({ animal }) => {
  const { lifeExpectancy, swim, continent, biome } = animal;

  return (
    <Container className="row container">
      <Container md={3} className="container-fluid mt-3 col">
        <Card className="text-center">
          <Card.Title>Continent</Card.Title>
          <Card.Text>
            {continent.map((row, index) => (
              <span key={row}>
                {row}
                {index !== continent.length - 1 ? ", " : ""}
              </span>
            ))}
          </Card.Text>
        </Card>
      </Container>
      <Container md={3} className="container-fluid mt-3 col">
        <Card className="text-center">
          <Card.Title>Biome</Card.Title>
          <Card.Text>
            {biome.map((row, index) => (
              <span key={row}>
                {row}
                {index !== biome.length - 1 ? ", " : ""}
              </span>
            ))}
          </Card.Text>
        </Card>
      </Container>
      {swim && (
        <Container md={3} className="container-fluid mt-3 col">
          <Card className="text-center">
            <Card.Title>Can Swim?</Card.Title>
            <Card.Text>{swim}</Card.Text>
          </Card>
        </Container>
      )}

      <Container md={3} className="container-fluid mt-3 col">
        <Card className="text-center">
          <Card.Title>Life Expectancy</Card.Title>
          <Card.Text>
            Male: {lifeExpectancy.male} years | Female: {lifeExpectancy.female}{" "}
            years
          </Card.Text>
        </Card>
      </Container>
    </Container>
  );
};

export default TopInfo;
