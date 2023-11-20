import React from "react";
import { Container, Card, Col } from "react-bootstrap";

const HabitInfo = ({ animal }) => {
  const { habitatInfo } = animal;

  return (
    <Container className="row container">
      <h5 className="h5 text-white" style={{ marginLeft: "20px" }}>
        Habitat Info
      </h5>
      {habitatInfo.fence ? (
        <Col lg={2} className="container-fluid mt-3">
          <Card className="text-center">
            <Card.Title>Fence</Card.Title>
            <Card.Text>
              Grade: {habitatInfo.fence.grade}
              <br />
              Height: {habitatInfo.fence.height}
              <br />
              Climb-proof: {habitatInfo.fence.climbproof}
            </Card.Text>
          </Card>
        </Col>
      ) : (
        <Col lg={6} className="container-fluid mt-3">
          <Card className="text-center">
            <Card.Title>Humidity</Card.Title>
            <Card.Text>
              {habitatInfo.humidity.min} - {habitatInfo.humidity.max}
            </Card.Text>
          </Card>
        </Col>
      )}
      {habitatInfo.land && (
        <Col lg={2} className="container-fluid mt-3">
          <Card className="text-center">
            <Card.Title>Land</Card.Title>
            <Card.Text>
              {habitatInfo.land}m<sup>2</sup> | +{habitatInfo.landAdd}m
              <sup>2</sup> per
            </Card.Text>
          </Card>
        </Col>
      )}

      {habitatInfo.water && (
        <Col lg={2} className="container-fluid mt-3">
          <Card className="text-center">
            <Card.Title>Water</Card.Title>
            <Card.Text>
              {habitatInfo.water}m<sup>2</sup> | +{habitatInfo.waterAdd}m
              <sup>2</sup> per
            </Card.Text>
          </Card>
        </Col>
      )}

      {habitatInfo.climbable && (
        <Col lg={2} className="container-fluid mt-3">
          <Card className="text-center">
            <Card.Title>Climbing</Card.Title>
            <Card.Text>
              {habitatInfo.climbable}m<sup>2</sup> | +{habitatInfo.climbableAdd}
              m<sup>2</sup> per
            </Card.Text>
          </Card>
        </Col>
      )}

      {habitatInfo.temperature && (
        <Col
          className={
            habitatInfo.climbable
              ? "col-lg-2 container-fluid mt-3 "
              : "col-lg-6 container-fluid mt-3"
          }
        >
          <Card className="text-center">
            <Card.Title>Temperature</Card.Title>
            <Card.Text>
              {habitatInfo.temperature.min} - {habitatInfo.temperature.max}℃
            </Card.Text>
          </Card>
        </Col>
      )}
      {habitatInfo.guestCanEnter && (
        <Col lg={2} className="container-fluid mt-3">
          <Card className="text-center">
            <Card.Title>Guest Can Enter</Card.Title>
            <Card.Text>{habitatInfo.guestCanEnter}</Card.Text>
          </Card>
        </Col>
      )}
    </Container>
  );
};

export default HabitInfo;
